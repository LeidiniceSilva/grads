#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot area and subarea of study'


'reinit'
'set display color white'
'set gxout shaded'
'c'
'open /vol3/disco1/nice/PNT_2018/input_exp6/BATS/amz_neb_ICBC.2001010100.nc.ctl'

'color 0 4500 300 -kind white->gray->dimgray'
*'set clevs 0 400 800 1200 1600 2000 2400 2800 3200 3600 4000' 

'set mpdset brmap_hires'
'set map 1 1 6'
'set grid on'
'set ylopts 1 6 .1'
'set xlopts 1 5 .1'
'set xlint 5'
'set ylopts 1 5 .1'
'set ylint 3'
'set grads off'
'd topo'
'cbarn'
'draw title Dominio da Area de Estudo com Topografia (m) - AMZ_NEB'
'draw xlab Longitude'

'set font 1'
'set ccolor 2'

'printim /vol3/disco1/nice/PNT_2018/results/area_topo_amz_neb.jpeg jpeg white'
