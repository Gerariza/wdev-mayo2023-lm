menuJQ.innerHTML += `<nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
<a class="navbar-brand" href="index.html">Inicio</a>
<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
    aria-expanded="false" aria-label="Toggle navigation"></button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
            <a class="nav-link active" href="#" aria-current="page"> .... <span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://paginas-web-cr.com/ApiPHP/">API</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cursos</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="listarCursoJQ.html">Lista</a>
            <a class="dropdown-item" href="crearCursoJQ.html">Crear</a>
            </div>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profesores</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="listarProfesorJQ.html">Lista</a>
            <a class="dropdown-item" href="crearProfesorJQ.html">Crear</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Estudiantes</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="listaEstudianteJQ.html">Lista</a>
            <a class="dropdown-item" href="crearEstudianteJQ.html">Crear</a>
        </li>
        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Grupo</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="listaGrupoJQ.html">Lista</a>
            <a class="dropdown-item" href="crearGrupoJQ.html">Crear</a>
        </li>
    </ul>`