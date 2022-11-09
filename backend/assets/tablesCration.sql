CREATE TABLE PREGUNTAS(
    preg_id int not null auto_increment PRIMARY KEY,
    pregunta varchar(255)
);

CREATE TABLE ROLES_NEGOCIO(
    rol_neg_id int not null auto_increment PRIMARY KEY,
    descripcion_rol_neg varchar(255)
);

CREATE TABLE APLICATIVOS(
    app_id int not null auto_increment PRIMARY KEY,
    nombreapp varchar(50)
);

CREATE TABLE APLICATIVOS_MENU(
    app_id int,
    menu_id int not null auto_increment PRIMARY KEY,
    descripcion_menu varchar(255),
    FOREIGN KEY (app_id) references APLICATIVOS(app_id)
);

CREATE TABLE ROLES_APLICATIVOS(
    app_id int,
    rol_id int not null auto_increment PRIMARY KEY,
    descripcion_rol varchar(255),

    FOREIGN KEY (app_id) references APLICATIVOS(app_id)
);

CREATE TABLE ROLES_APLICATIVOS_MENU(
    app_id int,
    rol_id int,
    menu_id int,

    FOREIGN KEY (app_id) references APLICATIVOS(app_id),
    FOREIGN KEY (rol_id) references ROLES_APLICATIVOS(rol_id),
    FOREIGN KEY (menu_id) references APLICATIVOS_MENU(menu_id)

);

CREATE TABLE ROLES_NEGOCIO_APLICATIVOS(
    rol_neg_id int,
    app_id int,
    rol_id int,

    FOREIGN KEY (app_id) references APLICATIVOS(app_id),
    FOREIGN KEY (rol_id) references ROLES_APLICATIVOS(rol_id),
    FOREIGN KEY (rol_neg_id) references ROLES_NEGOCIO(rol_neg_id)

);

CREATE TABLE PERSONAS(
    user_id varchar(9) not null PRIMARY KEY,
    nombres varchar(100),
    apellidos varchar(100),
    direccion varchar(100),
    ciudad varchar(100),
    departamento varchar(50),
    hashpwd varchar(100)
);

CREATE TABLE PERSONAS_PREGUNTAS(
    user_id varchar(9),
    preg_id int,
    respuesta varchar(100),

    FOREIGN KEY (user_id) references PERSONAS(user_id),
    FOREIGN KEY (preg_id) references PREGUNTAS(preg_id)
);

CREATE TABLE PERMISOS(
    user_id varchar(9),
    app_id int,
    rol_neg_id int,
    fecha_solicitud date not null,
    fecha_autorizacion date not null,
    estado varchar(50),

    FOREIGN KEY (user_id) references PERSONAS(user_id),
    FOREIGN KEY (app_id) references APLICATIVOS(app_id),
    FOREIGN KEY (rol_neg_id) references ROLES_NEGOCIO(rol_neg_id)
);
