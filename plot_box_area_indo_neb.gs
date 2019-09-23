*----------------------------------------------------
* Draw an unfilled "box" under any map projection.
* Usage: drawbox <lon1> <lon2> <lat1> <lat2>
*  <lon1>: Beginning longitude.
*  <lon2>: Ending longitude. Must be >= <lon1>.
*  <lat1>: Beginning latitude.
*  <lat2>: Ending latitude. Must be >= <lat1>.
*----------------------------------------------------
'reinit'
'open /home/nice/Documentos/documents/works/degree_MCs_2015/datas/obs/rol/reg_rol-daily_controle8212noaa_20-70_W120.ctl'
'set gxout shaded'
'set display color white'
'c'
'set x 1 145'
'set y 1 73'

*--
'set xlopts 1 2 0.14'
'set ylopts 1 2 0.14'
'set xlint  20'
'set ylint 20'
*--
'set black -20 20'
'set cmax  70'
'set cint  5'
'set cmin -70'
'set rbrange -70 70'
*--
'set grads off'
'set csmooth on'
'set time 22dec2002'
*set map <cor> <estilo> <espessura>
'set map 1 1 0.5'
'd rolf'
'draw title ROL filtrada em 20-70 dias em 22dec2002 - Dados NOAA\(Areas de Estudo)'
*----------------------------------------------------------------------------------
*Área NEB
'drawbox 314 328 -16 -2'
*Área INDI
'drawbox 75 95 -5 5'
*-----
*'colorbar right-0.3'
'colorbar bottom-0.3 0.9'
*'cbar'

******************************
*Salvando a Figura
*----
'enable print rol_noaa_22dec2002.gmf'
'print'
'disable print'
'!./gxgif -r -x -i 825 -y 638 rol_noaa_22dec2002.gmf -o rol_noaa_22dec2002.gif'
'!rm rol_noaa_22dec2002.gmf'
'!see rol_noaa_22dec2002.gif &'

say 'Figura gerada, saindo agora...'



