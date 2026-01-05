<?php

namespace VueFormLaravel\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class MakeFormClass extends Command
{
    protected $signature = 'vueform:make {name : The VueForm class name}';
    protected $description = 'Create a new VueForm builder class';

    protected Filesystem $files;

    public function __construct(Filesystem $files)
    {
        parent::__construct();
        $this->files = $files;
    }

    public function handle()
    {
        $inputName = str_replace('\\', '/', $this->argument('name'));

        // Extract folder + class
        $pathParts = explode('/', $inputName);
        $className = array_pop($pathParts);
        $directory = implode('/', $pathParts);

        // Base directory: app/VueForm
        $basePath = app_path('VueForm' . ($directory ? '/' . $directory : ''));

        // Create folder(s)
        if (! $this->files->isDirectory($basePath)) {
            $this->files->makeDirectory($basePath, 0755, true);
        }

        // Full file path
        $filePath = $basePath . '/' . $className . '.php';

        // Prevent overwrite
        if ($this->files->exists($filePath)) {
            $this->error("File already exists: {$filePath}");
            return;
        }

        // Build namespace
        $namespace = 'App\\VueForm' . ($directory ? '\\' . str_replace('/', '\\', $directory) : '');

        // Vueform::name value (kebab-case)
        $formName = Str::kebab($className);

        // Build file content
        $stub = <<<PHP
<?php

namespace {$namespace};

use VueFormLaravel\Abstracts\\VueFormBuilder;
use VueFormLaravel\Elements\Vueform;

class {$className} extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                // elements
            ]);
    }
}
PHP;

        // Write file
        $this->files->put($filePath, $stub);

        $this->info("VueForm created: {$filePath}");
    }
}
