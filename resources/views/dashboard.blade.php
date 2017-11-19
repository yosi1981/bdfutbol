@extends('app')
@section('content')

<div id="paisvue" class="row">
<ul  v-for="pais in paises">
        <li>@{{pais.nombre}}</li>
        <button class="btn btn-danger" v-on:click="deletePais(pais.id)">Eliminar</button>
</ul>
</div>

@endsection