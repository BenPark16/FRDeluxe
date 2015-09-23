<!DOCTYPE html>
<html lang="us">

<head>
    <meta charset="UTF-8" />
    <title>A Pok&eacute;mon Calculator</title>
    <link type="text/css" rel="stylesheet" href="./bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/1.10.4/css/jquery.dataTables.min.css" />
    <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/colvis/1.1.1/css/dataTables.colVis.css" />
    <link type="text/css" rel="stylesheet" href="./select2/select2.css" />
    <link type="text/css" rel="stylesheet" href="./ap_calc.css?v2" />
</head>

<body>

<div class="header">
</div>

<div class="wrapper">

    <div>
        <span class="title-text">Pok&eacute;mon Damage Calculator</span>
        <span title="Select the generation.">
            <input class="gen btn-input" type="radio" name="gen" value="1" id="gen1" /><label class="btn btn-small btn-left" for="gen1">RBY</label>
            <input class="gen btn-input" type="radio" name="gen" value="2" id="gen2" /><label class="btn btn-small btn-mid" for="gen2">GSC</label>
            <input class="gen btn-input" type="radio" name="gen" value="3" id="gen3" /><label class="btn btn-small btn-mid" for="gen3">ADV</label>
            <input class="gen btn-input" type="radio" name="gen" value="4" id="gen4" /><label class="btn btn-small btn-mid" for="gen4">DPP</label>
            <input class="gen btn-input" type="radio" name="gen" value="5" id="gen5" /><label class="btn btn-small btn-mid" for="gen5">B/W</label>
            <input class="gen btn-input" type="radio" name="gen" value="6" id="gen6" checked="checked" /><label class="btn btn-small btn-right" for="gen6">X/Y</label>
        </span>
        <span title="Select the calculator's mode of function.">
            <input class="mode btn-input" type="radio" name="mode" id="all-vs-one" /><label class="btn btn-wide btn-right right" for="all-vs-one">All vs One</label>
            <input class="mode btn-input" type="radio" name="mode" id="one-vs-all" /><label class="btn btn-wide btn-mid right" for="one-vs-all">One vs All</label>
            <input class="mode btn-input" type="radio" name="mode" id="one-vs-one" /><label class="btn btn-wide btn-left right" for="one-vs-one">One vs One</label>
        </span>
    </div>
    <hr />
    <div>
        <span class="title-text">Show: </span>
        <span class="tiers" title="Select the tier(s)/format.">
            <input class="btn-input" type="checkbox" name="tier" id="Maison" /><label class="btn btn-left" for="Maison">Maison</label>
			<input class="btn-input" type="checkbox" name="tier" id="Common" /><label class="btn btn-mid" for="Common">Common</label>
            <input class="btn-input" type="checkbox" name="tier" id="40+" /><label class="btn btn-right" for="40+">40+</label>
    </span>
    </div>

</div>

    <div class="panel-group" id="accordion">
        <fieldset class="panel panel-default poke-info" id="p1">
            <legend class="panel-heading panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">>  Pokemon</a>
            </legend>
            <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                    <input type="text" class="set-selector" />
                    <div class="info-group">
                        <div>
                            <label>Type</label>
                            <select class="type1"></select>
                            <select class="type2"></select>
                        </div>
                        <div>
                            <label>Level</label>
                            <input class="level" value="100" />
                        </div>
                        <div class="hide">
                            <label>Weight (kg)</label>
                            <input class="weight" value="10.0" />
                        </div>
                    </div>
                    <div class="info-group">
                        <table>
                            <tr>
                                <th></th>
                                <th>Base</th>
                                <th class="gen-specific g3 g4 g5 g6">IVs</th>
                                <th class="gen-specific g3 g4 g5 g6">EVs</th>
                                <th class="gen-specific g1 g2 hide">DVs</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr class="hp">
                                <td>
                                    <label>HP</label>
                                </td>
                                <td>
                                    <input class="base" value="100" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="ivs" value="31" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="evs" type="number" min="0" max="252" step="4" value="0" />
                                </td>
                                <td class="gen-specific g1 g2 hide">
                                    <input class="dvs" value="15" disabled="disabled" />
                                </td>
                                <td><span class="total">341</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr class="at">
                                <td>
                                    <label>Attack</label>
                                </td>
                                <td>
                                    <input class="base" value="100" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="ivs" value="31" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="evs" type="number" min="0" max="252" step="4" value="0" />
                                </td>
                                <td class="gen-specific g1 g2 hide">
                                    <input class="dvs" value="15" />
                                </td>
                                <td><span class="total">236</span>
                                </td>
                                <td>
                                    <select class="boost">
                                        <option value="6">+6</option>
                                        <option value="5">+5</option>
                                        <option value="4">+4</option>
                                        <option value="3">+3</option>
                                        <option value="2">+2</option>
                                        <option value="1">+1</option>
                                        <option value="0" selected="selected">--</option>
                                        <option value="-1">-1</option>
                                        <option value="-2">-2</option>
                                        <option value="-3">-3</option>
                                        <option value="-4">-4</option>
                                        <option value="-5">-5</option>
                                        <option value="-6">-6</option>
                                    </select>
                                </td>
                            </tr>
                            <tr class="df">
                                <td>
                                    <label>Defense</label>
                                </td>
                                <td>
                                    <input class="base" value="100" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="ivs" value="31" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="evs" type="number" min="0" max="252" step="4" value="0" />
                                </td>
                                <td class="gen-specific g1 g2 hide">
                                    <input class="dvs" value="15" />
                                </td>
                                <td><span class="total">236</span>
                                </td>
                                <td>
                                    <select class="boost">
                                        <option value="6">+6</option>
                                        <option value="5">+5</option>
                                        <option value="4">+4</option>
                                        <option value="3">+3</option>
                                        <option value="2">+2</option>
                                        <option value="1">+1</option>
                                        <option value="0" selected="selected">--</option>
                                        <option value="-1">-1</option>
                                        <option value="-2">-2</option>
                                        <option value="-3">-3</option>
                                        <option value="-4">-4</option>
                                        <option value="-5">-5</option>
                                        <option value="-6">-6</option>
                                    </select>
                                </td>
                            </tr>
                            <tr class="sa gen-specific g2 g3 g4 g5 g6">
                                <td>
                                    <label>Sp. Atk</label>
                                </td>
                                <td>
                                    <input class="base" value="100" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="ivs" value="31" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="evs" type="number" min="0" max="252" step="4" value="0" />
                                </td>
                                <td class="gen-specific g1 g2 hide">
                                    <input class="dvs" value="15" />
                                </td>
                                <td><span class="total">236</span>
                                </td>
                                <td>
                                    <select class="boost">
                                        <option value="6">+6</option>
                                        <option value="5">+5</option>
                                        <option value="4">+4</option>
                                        <option value="3">+3</option>
                                        <option value="2">+2</option>
                                        <option value="1">+1</option>
                                        <option value="0" selected="selected">--</option>
                                        <option value="-1">-1</option>
                                        <option value="-2">-2</option>
                                        <option value="-3">-3</option>
                                        <option value="-4">-4</option>
                                        <option value="-5">-5</option>
                                        <option value="-6">-6</option>
                                    </select>
                                </td>
                            </tr>
                            <tr class="sd gen-specific g2 g3 g4 g5 g6">
                                <td>
                                    <label>Sp. Def</label>
                                </td>
                                <td>
                                    <input class="base" value="100" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="ivs" value="31" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="evs" type="number" min="0" max="252" step="4" value="0" />
                                </td>
                                <td class="gen-specific g1 g2 hide">
                                    <input class="dvs" value="15" disabled="disabled" />
                                </td>
                                <td><span class="total">236</span>
                                </td>
                                <td>
                                    <select class="boost">
                                        <option value="6">+6</option>
                                        <option value="5">+5</option>
                                        <option value="4">+4</option>
                                        <option value="3">+3</option>
                                        <option value="2">+2</option>
                                        <option value="1">+1</option>
                                        <option value="0" selected="selected">--</option>
                                        <option value="-1">-1</option>
                                        <option value="-2">-2</option>
                                        <option value="-3">-3</option>
                                        <option value="-4">-4</option>
                                        <option value="-5">-5</option>
                                        <option value="-6">-6</option>
                                    </select>
                                </td>
                            </tr>
                            <tr class="sl gen-specific g1 hide">
                                <td>
                                    <label>Special</label>
                                </td>
                                <td>
                                    <input class="base" value="100" />
                                </td>
                                <td>
                                    <input class="dvs" value="15" />
                                </td>
                                <td><span class="total">236</span>
                                </td>
                                <td>
                                    <select class="boost">
                                        <option value="6">+6</option>
                                        <option value="5">+5</option>
                                        <option value="4">+4</option>
                                        <option value="3">+3</option>
                                        <option value="2">+2</option>
                                        <option value="1">+1</option>
                                        <option value="0" selected="selected">--</option>
                                        <option value="-1">-1</option>
                                        <option value="-2">-2</option>
                                        <option value="-3">-3</option>
                                        <option value="-4">-4</option>
                                        <option value="-5">-5</option>
                                        <option value="-6">-6</option>
                                    </select>
                                </td>
                            </tr>
                            <tr class="sp">
                                <td>
                                    <label>Speed</label>
                                </td>
                                <td>
                                    <input class="base" value="100" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="ivs" value="31" />
                                </td>
                                <td class="gen-specific g3 g4 g5 g6">
                                    <input class="evs" type="number" min="0" max="252" step="4" value="0" />
                                </td>
                                <td class="gen-specific g1 g2 hide">
                                    <input class="dvs" value="15" />
                                </td>
                                <td><span class="total">236</span>
                                </td>
                                <td>
                                    <select class="boost">
                                        <option value="6">+6</option>
                                        <option value="5">+5</option>
                                        <option value="4">+4</option>
                                        <option value="3">+3</option>
                                        <option value="2">+2</option>
                                        <option value="1">+1</option>
                                        <option value="0" selected="selected">--</option>
                                        <option value="-1">-1</option>
                                        <option value="-2">-2</option>
                                        <option value="-3">-3</option>
                                        <option value="-4">-4</option>
                                        <option value="-5">-5</option>
                                        <option value="-6">-6</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="info-group info-selectors">
                        <div class="gen-specific g3 g4 g5 g6">
                            <label>Nature</label>
                            <select class="nature">
                                <option value="Adamant">Adamant</option>
                                <option value="Bashful">Bashful</option>
                                <option value="Bold">Bold</option>
                                <option value="Brave">Brave</option>
                                <option value="Calm">Calm</option>
                                <option value="Careful">Careful</option>
                                <option value="Docile">Docile</option>
                                <option value="Gentle">Gentle</option>
                                <option value="Hardy" selected="selected">Hardy</option>
                                <option value="Hasty">Hasty</option>
                                <option value="Impish">Impish</option>
                                <option value="Jolly">Jolly</option>
                                <option value="Lax">Lax</option>
                                <option value="Lonely">Lonely</option>
                                <option value="Mild">Mild</option>
                                <option value="Modest">Modest</option>
                                <option value="Naive">Naive</option>
                                <option value="Naughty">Naughty</option>
                                <option value="Quiet">Quiet</option>
                                <option value="Quirky">Quirky</option>
                                <option value="Rash">Rash</option>
                                <option value="Relaxed">Relaxed</option>
                                <option value="Sassy">Sassy</option>
                                <option value="Serious">Serious</option>
                                <option value="Timid">Timid</option>
                            </select>
                        </div>
                        <div class="gen-specific g3 g4 g5 g6">
                            <label>Ability</label>
                            <select class="ability"></select>
                        </div>
                        <div class="gen-specific g2 g3 g4 g5 g6">
                            <label>Item</label>
                            <select class="item"></select>
                        </div>
                        <div>
                            <label>Status</label>
                            <select class="status">
                                <option value="Healthy">Healthy</option>
                                <option value="Poisoned">Poisoned</option>
                                <option value="Badly Poisoned">Badly Poisoned</option>
                                <option value="Burned">Burned</option>
                                <option value="Paralyzed">Paralyzed</option>
                                <option value="Asleep">Asleep</option>
                                <option value="Frozen">Frozen</option>
                            </select>
                            <select class="toxic-counter hide">
                                <option value="1">1/16</option>
                                <option value="2">2/16</option>
                                <option value="3">3/16</option>
                                <option value="4">4/16</option>
                                <option value="5">5/16</option>
                                <option value="6">6/16</option>
                                <option value="7">7/16</option>
                                <option value="8">8/16</option>
                                <option value="9">9/16</option>
                                <option value="10">10/16</option>
                                <option value="11">11/16</option>
                                <option value="12">12/16</option>
                                <option value="13">13/16</option>
                                <option value="14">14/16</option>
                                <option value="15">15/16</option>
                            </select>
                        </div>
                    </div>
                    <div class="info-group">
                        <label>Current HP</label>
                        <input class="current-hp" value="341" />/<span class="max-hp">341</span> (
                        <input class="percent-hp" value="100" />%)
                    </div>
                    <div class="move1">
                        <select class="move-selector small-select"></select>
                        <input class="move-bp" value="50" />
                        <select class="move-type"></select>
                        <select class="move-cat gen-specific g4 g5 g6">
                            <option value="Physical">Physical</option>
                            <option value="Special">Special</option>
                        </select>
                        <input class="move-crit btn-input" type="checkbox" id="critL1" />
                        <label class="btn crit-btn" for="critL1" title="Force this attack to be a critical hit?">Crit</label>
                        <select class="move-hits hide">
                            <option value="2">2 hits</option>
                            <option value="3">3 hits</option>
                            <option value="4">4 hits</option>
                            <option value="5">5 hits</option>
                        </select>
                    </div>
                    <div class="move2">
                        <select class="move-selector small-select"></select>
                        <input class="move-bp" value="0" />
                        <select class="move-type"></select>
                        <select class="move-cat gen-specific g4 g5 g6">
                            <option value="Physical">Physical</option>
                            <option value="Special">Special</option>
                        </select>
                        <input class="move-crit btn-input" type="checkbox" id="critL2" />
                        <label class="btn crit-btn" for="critL2" title="Force this attack to be a critical hit?">Crit</label>
                        <select class="move-hits hide">
                            <option value="2">2 hits</option>
                            <option value="3">3 hits</option>
                            <option value="4">4 hits</option>
                            <option value="5">5 hits</option>
                        </select>
                    </div>
                    <div class="move3">
                        <select class="move-selector small-select"></select>
                        <input class="move-bp" value="0" />
                        <select class="move-type"></select>
                        <select class="move-cat gen-specific g4 g5 g6">
                            <option value="Physical">Physical</option>
                            <option value="Special">Special</option>
                        </select>
                        <input class="move-crit btn-input" type="checkbox" id="critL3" />
                        <label class="btn crit-btn" for="critL3" title="Force this attack to be a critical hit?">Crit</label>
                        <select class="move-hits hide">
                            <option value="2">2 hits</option>
                            <option value="3">3 hits</option>
                            <option value="4">4 hits</option>
                            <option value="5">5 hits</option>
                        </select>
                    </div>
                    <div class="move4">
                        <select class="move-selector small-select"></select>
                        <input class="move-bp" value="0" />
                        <select class="move-type"></select>
                        <select class="move-cat gen-specific g4 g5 g6">
                            <option value="Physical">Physical</option>
                            <option value="Special">Special</option>
                        </select>
                        <input class="move-crit btn-input" type="checkbox" id="critL4" />
                        <label class="btn crit-btn" for="critL4" title="Force this attack to be a critical hit?">Crit</label>
                        <select class="move-hits hide">
                            <option value="2">2 hits</option>
                            <option value="3">3 hits</option>
                            <option value="4">4 hits</option>
                            <option value="5">5 hits</option>
                        </select>
                    </div>
                </div>
            </div>
        </fieldset>
        <fieldset class="panel panel-default field-info">
            <legend class="panel-heading panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">>  Field</a>
            </legend>
            <div id="collapseTwo" class="panel-collapse collapse">
                <div class="panel-body">
                    <div class="gen-specific g3 g4 g5 g6" style="width: 10.6em; margin: 0 auto 5px;" title="Select the battle format.">
                        <input class="btn-input" type="radio" name="format" value="Singles" id="singles-format" checked="checked" />
                        <label class="btn btn-left" for="singles-format">Singles</label>
                        <input class="btn-input" type="radio" name="format" value="Doubles" id="doubles-format" />
                        <label class="btn btn-right" for="doubles-format">Doubles</label>
                    </div>
                    <div class="gen-specific g3 g4 g5 g6" style="width: 22.2em; margin: 5px auto;" title="Select the current weather condition.">
                        <input class="btn-input" type="radio" name="weather" value="" id="clear" checked="checked" />
                        <label class="btn btn-small btn-left" for="clear">None</label>
                        <input class="btn-input" type="radio" name="weather" value="Sun" id="sun" />
                        <label class="btn btn-small btn-mid" for="sun">Sun</label>
                        <input class="btn-input" type="radio" name="weather" value="Rain" id="rain" />
                        <label class="btn btn-small btn-mid" for="rain">Rain</label>
                        <input class="btn-input" type="radio" name="weather" value="Sand" id="sand" />
                        <label class="btn btn-small btn-mid" for="sand">Sand</label>
                        <input class="btn-input" type="radio" name="weather" value="Hail" id="hail" />
                        <label class="btn btn-small btn-right" for="hail">Hail</label>
                    </div>
                    <div class="gen-specific g6" title="Select the current weather condition.">
                        <input class="btn-input" type="radio" name="weather" value="Harsh Sunshine" id="harsh-sunshine" />
                        <label class="btn btn-xxxwide btn-left" for="harsh-sunshine">Harsh Sunshine</label>
                        <input class="btn-input" type="radio" name="weather" value="Heavy Rain" id="heavy-rain" />
                        <label class="btn btn-xxxwide btn-mid" for="heavy-rain">Heavy Rain</label>
                        <input class="btn-input" type="radio" name="weather" value="Strong Winds" id="strong-winds" />
                        <label class="btn btn-xxxwide btn-right" for="strong-winds">Strong Winds</label>
                    </div>
                    <div class="gen-specific g2 hide" style="width: 17.8em; margin: 0 auto 5px;" title="Select the current weather condition.">
                        <input class="btn-input" type="radio" name="gscWeather" value="" id="gscClear" checked="checked" />
                        <label class="btn btn-small btn-left" for="gscClear">None</label>
                        <input class="btn-input" type="radio" name="gscWeather" value="Sun" id="gscSun" />
                        <label class="btn btn-small btn-mid" for="gscSun">Sun</label>
                        <input class="btn-input" type="radio" name="gscWeather" value="Rain" id="gscRain" />
                        <label class="btn btn-small btn-mid" for="gscRain">Rain</label>
                        <input class="btn-input" type="radio" name="gscWeather" value="Sand" id="gscSand" />
                        <label class="btn btn-small btn-right" for="gscSand">Sand</label>
                    </div>
                    <div class="gen-specific g4 g5 g6" style="width: 5.3em; margin: 5px auto;" title="Is gravity in effect?">
                        <input class="btn-input" type="checkbox" id="gravity" />
                        <label class="btn" for="gravity">Gravity</label>
                    </div>
                    <hr class="gen-specific g2 g3 g4 g5 g6" />
                    <div class="btn-group gen-specific g4 g5 g6">
                        <div class="left" title="Is Stealth Rock affecting this side of the field?">
                            <input class="btn-input" type="checkbox" id="srL" />
                            <label class="btn btn-xwide" for="srL">Stealth Rock</label>
                        </div>
                        <div class="right" title="Is Stealth Rock affecting this side of the field?">
                            <input class="btn-input" type="checkbox" id="srR" />
                            <label class="btn btn-xwide" for="srR">Stealth Rock</label>
                        </div>
                    </div>
                    <div class="btn-group gen-specific g3 g4 g5 g6">
                        <div class="left" title="Are there Spikes on this side of the field?">
                            <input class="btn-input" type="radio" name="spikesL" value="0" id="spikesL0" checked="checked" />
                            <label class="btn btn-xsmall btn-left" for="spikesL0">0</label>
                            <input class="btn-input" type="radio" name="spikesL" value="1" id="spikesL1" />
                            <label class="btn btn-xsmall btn-mid" for="spikesL1">1</label>
                            <input class="btn-input" type="radio" name="spikesL" value="2" id="spikesL2" />
                            <label class="btn btn-xsmall btn-mid" for="spikesL2">2</label>
                            <input class="btn-input" type="radio" name="spikesL" value="3" id="spikesL3" />
                            <label class="btn btn-wide btn-right" for="spikesL3">3 Spikes</label>
                        </div>
                        <div class="right" title="Are there Spikes on this side of the field?">
                            <input class="btn-input" type="radio" name="spikesR" value="0" id="spikesR0" checked="checked" />
                            <label class="btn btn-xsmall btn-left" for="spikesR0">0</label>
                            <input class="btn-input" type="radio" name="spikesR" value="1" id="spikesR1" />
                            <label class="btn btn-xsmall btn-mid" for="spikesR1">1</label>
                            <input class="btn-input" type="radio" name="spikesR" value="2" id="spikesR2" />
                            <label class="btn btn-xsmall btn-mid" for="spikesR2">2</label>
                            <input class="btn-input" type="radio" name="spikesR" value="3" id="spikesR3" />
                            <label class="btn btn-wide btn-right" for="spikesR3">3 Spikes</label>
                        </div>
                    </div>
                    <div class="btn-group gen-specific g2">
                        <div class="left" title="Are there Spikes on this side of the field?">
                            <input class="btn-input" type="checkbox" id="gscSpikesL" />
                            <label class="btn" for="gscSpikesL">Spikes</label>
                        </div>
                        <div class="right" title="Are there Spikes on this side of the field?">
                            <input class="btn-input" type="checkbox" id="gscSpikesR" />
                            <label class="btn" for="gscSpikesR">Spikes</label>
                        </div>
                    </div>
                    <div class="btn-group">
                        <div class="left" title="Is this Pokemon protected by Reflect and/or Light Screen?">
                            <input class="btn-input" type="checkbox" id="reflectL" />
                            <label class="btn btn-left" for="reflectL">Reflect</label>
                            <input class="btn-input" type="checkbox" id="lightScreenL" />
                            <label class="btn btn-xwide btn-right" for="lightScreenL">Light Screen</label>
                        </div>
                        <div class="right" title="Is this Pokemon protected by Reflect and/or Light Screen?">
                            <input class="btn-input" type="checkbox" id="reflectR" />
                            <label class="btn btn-left" for="reflectR">Reflect</label>
                            <input class="btn-input" type="checkbox" id="lightScreenR" />
                            <label class="btn btn-xwide btn-right" for="lightScreenR">Light Screen</label>
                        </div>
                    </div>
                    <div class="btn-group gen-specific g2 g3 g4 g5 g6">
                        <div class="left" title="Has this Pokemon been revealed with Foresight or Odor Sleuth?">
                            <input class="btn-input" type="checkbox" id="foresightL" />
                            <label class="btn btn-wide" for="foresightL">Foresight</label>
                        </div>
                        <div class="right" title="Has this Pokemon been revealed with Foresight or Odor Sleuth?">
                            <input class="btn-input" type="checkbox" id="foresightR" />
                            <label class="btn btn-wide" for="foresightR">Foresight</label>
                        </div>
                    </div>
                    <div class="btn-group gen-specific g3 g4 g5 g6">
                        <div class="left" title="Has this Pokemon's power been boosted by an ally's Helping Hand?">
                            <input class="btn-input" type="checkbox" id="helpingHandL" />
                            <label class="btn btn-xxwide" for="helpingHandL">Helping Hand</label>
                        </div>
                        <div class="right" title="Has this Pokemon's power been boosted by an ally's Helping Hand?">
                            <input class="btn-input" type="checkbox" id="helpingHandR" />
                            <label class="btn btn-xxwide" for="helpingHandR">Helping Hand</label>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
    <div>
        <fieldset class="panel holder-0">
            <legend class="panel-heading panel-title">Damage Results</legend>
            <table class="hide display" id="holder-2">
                <thead>
                    <tr>
                        <th></th>
                        <th>Best Move</th>
                        <th>Damage</th>
                        <th>KO Chance</th>
                        <th>Type 1</th>
                        <th>Type 2</th>
                        <th>Ability</th>
                        <th>Item</th>
                    </tr>
                </thead>
            </table>
        </fieldset>
    </div>
    <!-- jquery.dataTables is incompatible with newer versions of jQuery -->
    <script type="text/javascript" src="./js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script> <!-- to be replaced (probably) -->
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.4/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/colvis/1.1.1/js/dataTables.colVis.min.js"></script>
    <script type="text/javascript" src="./js/lodash.min.js"></script>
    <script type="text/javascript" src="./select2/select2.min.js"></script>
    <script type="text/javascript" src="./js/data/pokedex.js"></script>
    <script type="text/javascript" src="./js/data/setdex_xy.js"></script>
    <script type="text/javascript" src="./js/data/setdex_bw.js"></script>
    <script type="text/javascript" src="./js/data/setdex_dpp.js"></script>
    <script type="text/javascript" src="./js/data/setdex_rse.js"></script>
    <script type="text/javascript" src="./js/data/setdex_gsc.js"></script>
    <script type="text/javascript" src="./js/data/setdex_rby.js"></script>
    <script type="text/javascript" src="./js/data/stat_data.js"></script>
    <script type="text/javascript" src="./js/data/type_data.js"></script>
    <script type="text/javascript" src="./js/data/nature_data.js"></script>
    <script type="text/javascript" src="./js/data/ability_data.js"></script>
    <script type="text/javascript" src="./js/data/item_data.js"></script>
    <script type="text/javascript" src="./js/data/move_data.js"></script>
    <script type="text/javascript" src="./js/ap_calc.js"></script>
    <script type="text/javascript" src="./js/calc_bc.js"></script>
    <script type="text/javascript" src="./js/damage.js"></script>
    <script type="text/javascript" src="./js/damage_dpp.js"></script>
    <script type="text/javascript" src="./js/damage_rse.js"></script>
    <script type="text/javascript" src="./js/damage_gsc.js"></script>
    <script type="text/javascript" src="./js/damage_rby.js"></script>
    <script type="text/javascript" src="./js/ko_chance.js"></script>

    <div style="clear:both;padding:20px;text-align:right"><p><a href="https://github.com/Zarel/honko-damagecalc" target="_blank">GitHub repository for the damage calculator</a></p></div>

</body>

</html>
