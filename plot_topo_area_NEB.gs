#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot area and subarea of study'


'reinit'
'set display color white'
'set gxout shaded'
'c'
'open /home/rcm13/dados/input/NEB_RCM_exp13_DOMAIN000.nc.ctl'

'color 0 1400 100 -kind white->gray->dimgray'

'set mpdset mresbr'
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
'draw title Dominio da Area de Estudo com Topografia (m) - NEB'
'draw xlab Longitude'
'draw ylab Latitude'


'set font 1'
'set ccolor 2'

************ Plot box NORTHEAST ************

# area Litoral leste Nordeste
 x15=-49; x16=-34; y15=-18.5; y16=-1;
'q ll2xy 'x15' 'y15''; pp1=sublin(result,1); 
'q ll2xy 'x16' 'y16''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x15+11.0' 'y15+16.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'NEB''


'printim /home/rcm13/results/area_topo_NEB.png white'
