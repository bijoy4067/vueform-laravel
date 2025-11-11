<?php

namespace LaravelVueForm;

use Composer\Script\Event;
use Symfony\Component\Process\Process;

class ComposerScripts
{
    public static function postInstall(Event $event)
    {
        $io = $event->getIO();
        $io->write("<info>🚀 Building Vue assets for Laravel Vueform...</info>");

        $rootPath = getcwd();
        $packagePath = __DIR__ . '/..';

        // Step 1: Install NPM dependencies
        $io->write("<comment>→ Running npm install...</comment>");
        self::runCommand('npm install', $packagePath, $io);

        // Step 2: Build assets
        $io->write("<comment>→ Running npm run build...</comment>");
        self::runCommand('npm run build', $packagePath, $io);

        // Step 3: Move dist files to Laravel public/vendor
        $target = $rootPath . '/public/vendor/laraform-laravel';
        if (!is_dir($target)) {
            mkdir($target, 0755, true);
        }

        self::runCommand("cp -r $packagePath/dist/* $target", $packagePath, $io);

        $io->write("<info>✅ Vueform assets successfully published to public/vendor/laraform-laravel</info>");
    }

    protected static function runCommand($command, $cwd, $io)
    {
        $process = Process::fromShellCommandline($command, $cwd);
        $process->setTimeout(300);
        $process->run(function ($type, $buffer) use ($io) {
            $io->write($buffer, false);
        });

        if (!$process->isSuccessful()) {
            throw new \RuntimeException("Command failed: {$command}");
        }
    }
}