#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot of variables climatology of the simulation'


'reinit'
*********************************************
MES = "dec"
SIM = "exp1"
PATH = "output1"
*********************************************
'open /vol3/nice/'PATH'/pre_amz_neb_regcm_'SIM'_2001-2005_clim.nc.ctl'
'set display color white'
'set gxout shaded'
'c'
'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 0 2 4 6 10 15 20 30 40 50 60 80 100 120'
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set cmin 0'
'set grads off'
'set mpdset brmap_hires'
'set t 12'
'd pr'
'cbarn'
'draw title Rainfall climatology - RegCM4.6_'SIM' - 'MES'/2001_2005 (mm)'
'draw xlab Longitude'
'draw ylab Latitude'
'printim /vol3/nice/results/regcm4.6.0_exp/pre_amz_neb_regcm46_'SIM'_'MES'_2001_2005_clim.jpeg jpeg white'


'reinit'
*********************************************
MES = "dec"
SIM = "exp1"
PATH = "output1"
*********************************************
'open /vol3/nice/'PATH'/t2m_amz_neb_regcm_'SIM'_2001-2005_clim.nc.ctl'
'set display color white'
'set gxout shaded'
'c'
'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red -10 30 2'
'set cmin 0'
'set grads off'
'set mpdset brmap_hires'
'set t 12'
'd s01tas'
'cbarn'
'draw title Temperature climatology - RegCM4.6_'SIM' - 'MES'/2001_2005 (`3.`1C)'
'draw xlab Longitude'
'draw ylab Latitude'
'printim /vol3/nice/results/regcm4.6.0_exp/t2m_amz_neb_regcm46_'SIM'_'MES'_2001_2005_clim.jpeg jpeg white'




