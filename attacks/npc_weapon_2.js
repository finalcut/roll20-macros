**@{selected|token_name}** attacks with its *@{selected|repeating_npcaction_$1_name}* at **@{target|Aiming for...|token_name}** (AC of **@{target|Aiming for...|ac})** 
/w GM &{template:default} {{name=@{selected|token_name}: @{selected|repeating_npcaction_$1_name}}} {{Attacking AC of=@{target|Aiming for...|ac}}}{{Attack bonus= +(@{selected|repeating_npcaction_$1_attack_tohit}+0) ([[1d20+(@{selected|repeating_npcaction_$1_attack_tohit}+0)]]/[[1d20+(@{selected|repeating_npcaction_$1_attack_tohit}+0)]])}}{{@{selected|repeating_npcaction_$1_attack_damagetype} Damage= (@{selected|repeating_npcaction_$1_attack_damage}+0) + (@{selected|repeating_npcaction_$1_attack_damage2}+0)  ([[@{selected|repeating_npcaction_$1_attack_damage} + @{selected|repeating_npcaction_$1_attack_damage2}]]) }}{{+Opt. @{selected|repeating_npcaction_$1_attack_damagetype2} Damage= (@{selected|repeating_npcaction_$1_attack_damage2}+0)  ([[(@{selected|repeating_npcaction_$1_attack_damage2}+0)]]) }}{{+Crit Damage= ([[@{selected|repeating_npcaction_$1_attack_damage}]])}}{{Description=@{selected|repeating_npcaction_$1_description}}}

