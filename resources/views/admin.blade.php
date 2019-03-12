<!DOCTYPE html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Dashboard | Xerox Business Solutions Southwest</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>
<div id="app">
    <v-app>
        <app-header></app-header>
        <login></login>
    </v-app>
</div>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
