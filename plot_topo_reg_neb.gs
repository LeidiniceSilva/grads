#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '08/02/20'
#__description__ = 'Plot study area (NEB)'


'reinit'
'set display color white'
'set gxout shaded'
'c'
'open /home/nice/neb_DOMAIN000.nc.ctl'

'color.gs -gxout shaded -kind white->gray->darkgray 0 1800 200'

'set mpdset mresbr'
'set map 1 1 6'
'set grid on'
'set xlopts 1 5 .2'
'set xlint 3'
'set ylopts 1 5 .2'
'set ylint 3'
'set grads off'

'd topo'
'draw title Domain simulation with topography (m)'

'cbarm'
'set font 5'
'set ccolor 1'
'printim /home/nice/topo_neb.png png white'
