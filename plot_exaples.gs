#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '06/09/19'
#__description__ = 'Plot example maps'


'reinit'
'set display color white'
'set gxout shaded'
'c'

'sdfopen /vol3/disco1/nice/data_file/dca_iag_data/tpr_regHadGEM2_clm_RCP85.1970-2099.nc'

'color 1 16 1 -kind white->grainbow'
'set cmin 2'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset mresbr'
'set lon -85 -15'
'set lat -20 10'
'set map 1 1 6'
'set ylopts 1 4 0.15'
'set xlopts 1 4 0.15'
'set t 431'
'd tpr'

'xcbar -line on -edge triangle'
'draw title b) Rain Nov/2005 (mm/d) - RegCM4.6_HadGEM2-ES'

'printim /vol3/disco1/nice/data_file/dca_iag_data/test_downscaling.png white'

'reinit'
'set display color white'
'set gxout shaded'
'c'

'sdfopen /vol3/disco1/nice/data_file/obs_data/r_trmm_AS3B42_obs_mon_1998-2014.nc'

'color 1 16 1 -kind white->grainbow'
'set cmin 2'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset mresbr'
'set lon -85 -15'
'set lat -20 10'
'set map 1 1 6'
'set ylopts 1 4 0.15'
'set xlopts 1 4 0.15'
'set t 95'
'd r'

'xcbar -line on -edge triangle'
'draw title c) Rain Nov/2005 (mm/d) - TRMM'

'printim /vol3/disco1/nice/data_file/dca_iag_data/test_trmms.png white'
