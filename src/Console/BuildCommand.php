<?php

namespace LaravelVueForm\Console;

use Illuminate\Console\Command;
use Symfony\Component\Process\Process;
use Illuminate\Support\Facades\File;

class BuildCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'laravel-vueform:build {--watch : Run Vite in watch mode}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Build VueForm package assets using Vite (npm run build or npm run dev --watch)';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $this->info('🚀 Building Laravel VueForm assets...');

        // Check if the config file exists
        $configPath = config_path('laravel-vueform.php');
        if (!File::exists($configPath)) {
            $this->info('⚠️ Config file not found. Publishing Laravel VueForm config...');
            $this->call('vendor:publish', [
                '--tag' => 'laravel-vueform',
                '--force' => true, // optional: overwrite if already exists
            ]);
            $this->info('✅ Config file published!');
        }

        $root = base_path('packages/laravel-vueform');
        $npm = strtoupper(substr(PHP_OS, 0, 3)) === 'WIN' ? 'npm.cmd' : 'npm';
        $command = $this->option('watch') ? ['run', 'dev'] : ['run', 'build'];

        $process = new Process(array_merge([$npm], $command), $root);
        $process->setTimeout(null);

        $process->start();
        $process->wait(function ($type, $buffer) {
            echo $buffer;
        });

        if ($process->isSuccessful()) {
            $this->info('✅ Build complete!');
            return Command::SUCCESS;
        }

        $this->error('❌ Build failed: ' . $process->getErrorOutput());
        return Command::FAILURE;
    }
}
