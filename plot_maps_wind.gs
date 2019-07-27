#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '07/04/18'
#__description__ = 'Plot maps of monthly wind'


'reinit'
'set display color white'
'set gxout vector'
'c'

'open /vol3/disco1/nice/data_file/regcm_data/exp_pbl/output_exp2/amz_neb_ATM.2010040100.nc.ctl'

'set map 1 1 6'
'set grads off'
'set mpdset mresbr hires'
'set xlint 5'
'set ylint 5'
'set xlopts 1 1 0.12'
'set ylopts 1 1 0.12'
'set lev 850'
'define mediau = ave(ua, time=01Apr2010, time=30Apr2010)'
'define mediav = ave(va, time=01Apr2010, time=30Apr2010)'

'd skip(mediau,6);skip(mediav,6);mag(mediau,mediav)'
'cbarn'
'draw title Reg_EXP2 uv_850mb Apr/2010'
'draw string 9.4 7.4 Unit: m/s'

'printim /vol3/disco1/nice/data_file/uv_mean_850mb_apr2010_exp2.png png white'






