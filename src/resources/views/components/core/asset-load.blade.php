{{-- Load Vueform Styles Configuration --}}
<script>
    window.VUEFORM_STYLES = @json(config('vueform-laravel.styles'));
</script>

{{-- Load Vueform Assets --}}
<link rel="stylesheet" href="{{ asset('assets/vueform-laravel/vueform-app.css') }}">
<script type="module" src="{{ asset('assets/vueform-laravel/vueform-app.js') }}"></script>

{{-- Load Vueform Custom Assets --}}
<script type="module" src="{{ asset('assets/vueform-laravel/vueform-custom.js') }}"></script>
