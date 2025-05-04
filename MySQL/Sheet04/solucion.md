1. Obtener el listado de socios que están inscritos en una disciplina específica.

SELECT s.nombre_completo AS Nombre_Socio, d.nombre AS Disciplina
FROM socio s
JOIN disciplina d ON s.ID_miembros = d.ID_evento
WHERE d.nombre = 'Futbol';

2. Consultar todos los eventos futuros y sus participantes.
3. Listar los pagos pendientes de cuotas de todos los socios.
4. Obtener el historial de entrenadores asignados a cada disciplina.
5. Mostrar el nombre del socio ganador de un evento específico (si
aplica).