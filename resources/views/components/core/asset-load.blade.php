{{-- Load Vueform Styles Configuration --}}
<script>
    window.VUEFORM_STYLES = @json(config('vueform-laravel.styles'));
    @if (!empty(env('GOOGLE_RECAPTCHA_SITE_KEY')))
        window.google_recaptcha_site_key = '{{ env('GOOGLE_RECAPTCHA_SITE_KEY') }}';
    @endif
</script>

{{-- Load Vueform Assets --}}
<link rel="stylesheet" href="{{ asset('/vueform-laravel/vueform-app.css') }}">
<script type="module" src="{{ asset('/vueform-laravel/vueform-app.js') }}"></script>

{{-- Load Vueform Custom User Assets --}}
<script src="{{ asset('/vueform-laravel/vueform-custom.js') }}"></script>
