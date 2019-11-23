'reinit'


'open 2017-02-24_novo_g2.ctl'

'set display color white'
'c'

'set t 1'

'set lat -23.6508615'
'set lon -46.6225365'


ti = 1

while(ti<=48)
  'set mpdset hires'
  'set lev 1000 100'
  'set zlog on'
  'set lat -23'
  'set t 'ti
  'q time'
  say result
  datahora=subwrd(result,3)%' t='%ti
  
  'd dewptc'

  'set ccolor 1'
  'set gxout vector'
  'd skip(w,2,2)*10;u'
  'draw title tempo 'datahora
  'cbar'
*  'printim perfil_grade2_'ti'.png'
  'q pos'
  'c'
  ti= ti+1

endwhile


