/em attacks at @{target|token_name} with their @{selected|repeating_attack_$1_atkname}!
&{template:default} {{name=@{selected|repeating_attack_$1_atkname}}} {{attack= [[?{Attack Type|Standard, 1d20|Advantage, 2d20kh1|Disadvantage, 2d20kl1} + @{selected|repeating_attack_$1_atkprofflag} [Proficiency Bonus] + @{selected|repeating_attack_$1_atkattr_base} [Attribute Modifier]  + @{selected|repeating_attack_$1_atkmagic} [Attack Bonus]]] }} {{Damage= [[@{selected|repeating_attack_$1_dmgbase}+@{selected|repeating_attack_$1_dmgattr} + @{selected|repeating_attack_$1_atkmagic}]] @{selected|repeating_attack_$1_dmgtype}}}
/fx splatter-blood @{target|token_id} @{selected|token_id} 
