{{-- Load Vueform Styles Configuration --}}
<script>
    window.VUEFORM_STYLES = @json(config('vueform-laravel.styles'));
</script>

{{-- Load Vueform Assets --}}
<link rel="stylesheet" href="{{ asset('vueform-laravel/vueform-app.css') }}">
<script type="module" src="{{ asset('vueform-laravel/vueform-app.js') }}"></script>

{{-- Load Vueform Custom Assets --}}
<script type="module" src="{{ asset('vueform-laravel/vueform-custom.js') }}"></script>
