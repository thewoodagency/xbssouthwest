<!DOCTYPE html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Dashboard | Xerox Business Solutions Southwest</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="{{secure_asset('css/app.css')}}">
</head>
<body>
<div id="app">
    <v-app>
        <dashboard-home></dashboard-home>
    </v-app>
</div>
<script src="{{secure_asset('js/app.js')}}"></script>
</body>
</html>
