CREATE VIEW menusDisponiblesParaPersona AS
SELECT user_id, nombreapp, descripcion_menu
FROM 
		(SELECT user_id, app_id, estado FROM PERMISOS WHERE estado ='AUTORIZADO') perms
		INNER JOIN
		(SELECT * FROM ROLES_NEGOCIO_APLICATIVOS) rols_negs
		ON rols_negs.app_id = perms.app_id AND rols_negs.rol_neg_id = perms.rol_neg_id

        INNER JOIN
        (SELECT * FROM ROLES_APLICATIVOS_MENU) rol_menus
        ON rols_negs.app_id =  rol_menus.app_id AND rols_negs.rol_id =  rol_menus.rol_id

        INNER JOIN
        (SELECT * FROM APLICATIVOS_MENU) app_menus
        ON rol_menus.menu_id = app_menus.menu_id

        INNER JOIN
        (SELECT * FROM APLICATIVOS) apps
        ON apps.app_id = perms.app_id
