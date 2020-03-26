## PC VERSION:

/em attacks at @{target|token_name} with their @{selected|repeating_attack_$0_atkname}!
&{template:default} {{name=@{selected|repeating_attack_$0_atkname}}} {{attack= [[?{Attack Type|Standard, 1d20|Advantage, 2d20kh1|Disadvantage, 2d20kl1} + @{selected|repeating_attack_$0_atkprofflag} [Proficiency Bonus] + @{selected|repeating_attack_$0_atkattr_base} [Attribute Modifier]  + (@{selected|repeating_attack_$0_atkmagic}+0) [Attack Bonus]]] vs AC @{target|ac}}} {{Damage= [[  @{selected|repeating_attack_$0_dmgbase}+@{selected|repeating_attack_$0_dmgattr} + (@{selected|repeating_attack_$0_atkmagic}+0) ]] @{selected|repeating_attack_$0_dmgtype}}}
/fx splatter-blood @{target|token_id} @{selected|token_id} 


## DM VERSION
/emas @{selected|token_name} attacks at @{target|token_name} with their @{selected|repeating_attack_$0_atkname}!
&{template:default} {{name=@{selected|repeating_attack_$0_atkname}}} {{attack= [[?{Attack Type|Standard, 1d20|Advantage, 2d20kh1|Disadvantage, 2d20kl1} + (@{selected|repeating_attack_$0_atkprofflag}+0) [Proficiency Bonus] + @{selected|repeating_attack_$0_atkattr_base} [Attribute Modifier]  + (@{selected|repeating_attack_$0_atkmagic}+0) [Attack Bonus]]] vs AC @{target|ac}}} {{Damage= [[@{selected|repeating_attack_$0_dmgbase}+@{selected|repeating_attack_$0_dmgattr} + (@{selected|repeating_attack_$0_atkmagic}+0)]] @{selected|repeating_attack_$0_dmgtype}}}
/fx splatter-blood @{target|token_id} @{selected|token_id} 



// ANY OTHER WEAPON SLOT:
// replace $0 with the postion of the weapon in your list. first item is $0, second is $1, third is $2, etc.  Makes sure the $ is still there.
// i global replace $0 with $1 for example




