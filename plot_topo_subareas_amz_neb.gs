#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot area and subarea of study'


'reinit'
'set display color white'
'set gxout shaded'
'c'
'open /vol3/disco1/nice/data_file/regcm_data/exp_pbl/input_exp/amz_neb_DOMAIN000.nc.ctl'

'color 0 3000 200 -kind white->green->gray'

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
'draw title Study area domain - AMZ_NEB'
'draw xlab Topography (m)'

'set font 1'
'set ccolor 2'

******** Plot box  AMAZONIA **********

# area amz
 x1=-72; x2=-49; y1=-8; y2=6;
'q ll2xy 'x1' 'y1''; pp1=sublin(result,1); 
'q ll2xy 'x2' 'y2''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x1+20.0' 'y1+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'AMZ'' 

# area sam
 x3=-72; x4=-49; y3=-18; y4=-8;
'q ll2xy 'x3' 'y3''; pp1=sublin(result,1); 
'q ll2xy 'x4' 'y4''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2' '
'q ll2xy 'x3+20.0' 'y3+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'SAM''

************ Plot box NORTHEAST ************

# area neb
 x5=-49; x6=-35; y5=-18; y6=-2;
'q ll2xy 'x5' 'y5''; pp1=sublin(result,1); 
'q ll2xy 'x6' 'y6''; pp2=sublin(result,1); 
'set line 1'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x5+10.5' 'y5+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'NEB''

'printim /vol3/disco1/nice/results/papers/exp_pbl/topo_amz_neb.png png white'
