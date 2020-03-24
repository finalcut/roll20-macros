attribute specific to repeating_attack  

depending on which weapon you are referencing you would use this like so.. In this example I'm using the first weapon (weapon 0)

```js
@{selected|repeating_attack_$0_atkname}
```

that would reference the first weapons attack of the selected token

* _options-flag (no impact, just determines whether the options are open or not)
* _atkname (name of the attack)
* _atkflag (determines if the attack should roll 'to hit')
* _atkattr_base (the base attribute modifier used in the 'to hit', for example Strength)
* _atkmod (extra modifier for 'to hit', for example this would be 1 for a +1 weapon)
* _atkprofflag (determines if proficiency should be added to the 'to hit' roll)
* _atkrange (the range of the attack)
* _atkmagic (any flat magic damage the attack does, for example this would be 1 for a +1 weapon)
* _atkcritrange (the crit range for the weapon, by default this is 20)
* _dmgflag (determines if the attack rolls damage)
* _dmgbase (the amount of damage to be rolled without base attribute modifier)
* _dmgattr (the base attribute modifier used in the damage)
* _dmgmod (additional damage dealt, this can only be a number not a calculation)
* _dmgtype (the type of damage being dealt)
* _dmgcuscrit (additional damage dealt on crit)
* _dmg2flag (determines if the attack rolls a second damage)
* _dmg2base (the amount of damage to be rolled without base attribute modifier for the second damage)
* _dmg2attr (the base attribute modifier used in the second damage)
* _dmg2mod (additional damage dealt in the second damage, this can only be a number not a calculation)
* _dmgt2ype (the type of damage being dealt in the second damage)
* _dmg2cuscrit (additional second damage dealt on crit)
* _saveflag (determines if the attack requires a saving throw
* _saveattr (the type of saving throw to be made)
* _savedc (the dc for the saving throw)
* _saveflat (the dc for the saving throw if FLAT was selected above)
* _saveeffect (the effect for the saving throw, usually just displays 'half damage')
* _ammo (the ammunition used by the attack)
* _atk_desc (the description for the attack)
