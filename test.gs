#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot maps of seasonal precipitation'


'reinit'
'sdfopen /vol3/disco1/nice/data_file/pr_Amon_HadGEM2-ES_historical_r1i1p1_185912-200511_mmd.nc'
'set display color white'
'set gxout shaded'
'c'

'color 0 16 1 -kind white->grainbow'
'set cmin 2'
'set grads off'
'set xlint 20'
'set ylint 20'
'set mpdset mresbr'
'set map 1 1 6'
'set ylopts 1 4 0.15'
'set xlopts 1 4 0.15'

'set t last'

'd pr'
'xcbar -line on -edge triangle'

'draw title a) Rain Nov/2005 (mm/d) - HadGEM-ES_historical_r1i1p1 '


'printim /vol3/disco1/nice/data_file/pr_hadgem2-es_historical_r1i1p1_jan2005_glob.png png white'






