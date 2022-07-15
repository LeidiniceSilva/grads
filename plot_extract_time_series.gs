#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '07/04/2018'
#__description__ = 'Extract time series of the area of study'


'reinit'
'set display color white'
'c'
'sdfopen /home/nice/Documentos/ufrn/papers/regcm_exp/exp_pbl/datas/pre_amz_neb_regcm_exp1_MAM_2005.nc'
'set mpdset brmap_hires'
'set map 15 1 3'
'set grid off'
'set ylopts 1 6 .1'
'set gxout contour'
'set cmin 10000000000'
'set xlopts 1 5 .1'
'set xlint 5'
'set ylopts 1 5 .1'
'set ylint 2'
'set grads off'
'd pr'
'draw title Dominio da Area de Estudo - AMZ_NEB'
'draw xlab Longitude'

'set font 1'
'set ccolor 2'

******** Plot box  AMAZONIA **********

# Area Acre e Amazonas - A1
 x1=-72; x2=-62; y1=-10; y2=-4;
'q ll2xy 'x1' 'y1''; pp1=sublin(result,1); 
'q ll2xy 'x2' 'y2''; pp2=sublin(result,1); 
'set line 4'; 'draw rec 'pp1' 'pp2''
'q ll2xy 'x1+1.0' 'y1+1.0''; d1 = subwrd(result,1); d2 = subwrd(result,2)
'draw string 'd1' 'd2' 'A1'' 

'printim /home/nice/area_amz_neb.jpeg jpeg white'

*************** Extract time series ********************

# You put on the coordinates of the area you want,
# check that the data vary from 180 to 180 or 0 360.
# area AMZ_NEB

'set x 1'
'set y 1'
'set t 1 12'

'rain_A1 = aave(pr,lon='x1',lon='x2',lat='y1',lat='y2')'

# Put on final time
tt=1; while(tt<=12); 

'set t 'tt''
'd rain_A1'

obs1 = subwrd(result,4)
say obs1
res1 = write('/vol3/nice/pre_A1_amz_neb_regcm_exp1_MAM_2005.dat',obs1)

'q time'
data = subwrd(result,60)
say data
resd = write('/vol3/nice/exp1_data.dat',data)
 
tt=tt+1; endwhile

