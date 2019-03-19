<!DOCTYPE html>
<html>
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-3736521-39"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-3736521-39');
    </script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Xerox Business Solutions Southwest</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="{{secure_asset('css/app.css')}}">
</head>
<body>
<div id="app">
    <v-app>
        <app-home></app-home>
    </v-app>
</div>
<script src="{{secure_asset('js/app.js')}}"></script>
</body>
</html>
