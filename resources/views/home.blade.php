<!DOCTYPE html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="{{secure_asset('css/app.css')}}">
</head>
<body>
<div id="app">
    <v-app>
        <app-header></app-header>
        <app-body></app-body>
        <app-footer></app-footer>
    </v-app>
</div>
<script src="{{secure_asset('js/app.js')}}"></script>
</body>
</html>
