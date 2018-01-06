
/**
 * The size of the map grid.
 * @const {!number}
 */
var MAP_SIZE = 24;

/**
 * The maximum visible distance in tiles.
 * @const {!number}
 */
var MAX_VISIBLE_DISTANCE = 16;

/**
 * The data URL prefix.
 * All 5 of the images start with this same data URL.
 * @const {!string}
 */
var DATA_URL_PREFIX = 'data:image/gif;base64,R0lGODlh';

/**
 * The pistol icon.
 * data:image/gif;base64,R0lGODlhKAAeAIABAP//AAAAACH5BAEKAAEALAAAAAAoAB4AAAJVjI+py+0Po5y02lsBvqB7z3SBSH5J+aXqympIC8fpKdesYuczretHPVJtgjfXaPgr/pCGVvPJdL6YxBi1urs2b9rkqusVgmFgbFZLHkvL37L7Dd8UAAA7
 * @const {!string}
 */
var PISTOL_DATA_URL = 'KAAeAIABAP//AAAAACH5BAEKAAEALAAAAAAoAB4AAAJVjI+py+0Po5y02lsBvqB7z3SBSH5J+aXqympIC8fpKdesYuczretHPVJtgjfXaPgr/pCGVvPJdL6YxBi1urs2b9rkqusVgmFgbFZLHkvL37L7Dd8UAAA7';

/**
 * The grenade icon.
 * data:image/gif;base64,R0lGODlhHgAeAIABAP//AAAAACH5BAEKAAEALAAAAAAeAB4AAAJQjI+py+0Po5wRAAotZlrvdAWW9xnhKJZHF6rg6Zpoqo5zi9m2uc3yhZPodLyJb9WhkF404ZAYfCwRSeNUVHU+UVHp8qjcdrXE2C6GTqvXjAIAOw==
 * @const {!string}
 */
var GRENADE_DATA_URL = 'HgAeAIABAP//AAAAACH5BAEKAAEALAAAAAAeAB4AAAJQjI+py+0Po5wRAAotZlrvdAWW9xnhKJZHF6rg6Zpoqo5zi9m2uc3yhZPodLyJb9WhkF404ZAYfCwRSeNUVHU+UVHp8qjcdrXE2C6GTqvXjAIAOw==';

/**
 * The assault rifle icon.
 * data:image/gif;base64,R0lGODlhUAAeAIABAP//AAAAACH5BAEKAAEALAAAAABQAB4AAAJ/jI+py+0Po5y02ouz3rx7CIQhN36GiKbqyq5M+bXyTCtAcMf0zrO4SOoJh64H8YiUOZLMnGlB/AFzxaekh0hlq1bjDDr9dkGtBgp8Hnu1azNb7Xau5QkV3PO22e+bdNzPhwE0NxgI52N4yJVotceoBvg4VihZaXmJmam5yWlRAAA7
 * @const {!string}
 */
var ASSAULT_RIFLE_DATA_URL = 'UAAeAIABAP//AAAAACH5BAEKAAEALAAAAABQAB4AAAJ/jI+py+0Po5y02ouz3rx7CIQhN36GiKbqyq5M+bXyTCtAcMf0zrO4SOoJh64H8YiUOZLMnGlB/AFzxaekh0hlq1bjDDr9dkGtBgp8Hnu1azNb7Xau5QkV3PO22e+bdNzPhwE0NxgI52N4yJVotceoBvg4VihZaXmJmam5yWlRAAA7';

/**
 * The rocket launcher icon.
 * data:image/gif;base64,R0lGODlhXgAeAIABAP//AAAAACH5BAEKAAEALAAAAABeAB4AAAKZjI+py+0Po5y02ouz3ryBD4ai2JXbiKKmBnDpC65Ze9IB/MlVbNiRz8jxDi9dMHfDKZfMphPWe0qn1Ge0is1qr9qul8n9isehMPnsdSmJOOMRaHE6kG63fF63x9YPeF5N0wbh98diA/VTuELnMyJBqBh3iFA2ARlJQZfkaIlZAzn06DmjqRA6OFp32peqd9kauQo7S1tr61AAADs=
 * @const {!string}
 */
var ROCKET_LAUNCHER_DATA_URL = 'XgAeAIABAP//AAAAACH5BAEKAAEALAAAAABeAB4AAAKZjI+py+0Po5y02ouz3ryBD4ai2JXbiKKmBnDpC65Ze9IB/MlVbNiRz8jxDi9dMHfDKZfMphPWe0qn1Ge0is1qr9qul8n9isehMPnsdSmJOOMRaHE6kG63fF63x9YPeF5N0wbh98diA/VTuELnMyJBqBh3iFA2ARlJQZfkaIlZAzn06DmjqRA6OFp32peqd9kauQo7S1tr61AAADs=';

/**
 * The sniper rifle icon.
 * data:image/gif;base64,R0lGODlhYAAeAIABAP//AAAAACH5BAEKAAEALAAAAABgAB4AAAKHjI+py+0Po5y02ouz3tyC34Xi8ZVlABinYoLj67TyTLvwndR6jfdQugCSVr4iiyE0KoM74vKJakqn1Gmois1qWdou9ukNU5ficlP5VZ2j4ojNY82BhEnNFjNGmHLXrF2HRAM1ItiwN4gj89CCmHgY49RI+Bj4JilJeam5ydnp+QkaKjpKulQAADs=
 * @const {!string}
 */
var SNIPER_RIFLE_DATA_URL = 'YAAeAIABAP//AAAAACH5BAEKAAEALAAAAABgAB4AAAKHjI+py+0Po5y02ouz3tyC34Xi8ZVlABinYoLj67TyTLvwndR6jfdQugCSVr4iiyE0KoM74vKJakqn1Gmois1qWdou9ukNU5ficlP5VZ2j4ojNY82BhEnNFjNGmHLXrF2HRAM1ItiwN4gj89CCmHgY49RI+Bj4JilJeam5ydnp+QkaKjpKulQAADs=';

/**
 * The set of weapons in the game.
 * @const {!Array}
 */
var WEAPONS = [
    //        Name               Icon                       AP  Range  Damage  Ammo
    /* 0 */ ['Pistol',           PISTOL_DATA_URL,           1,  8,     10,     10],
    /* 1 */ ['Hand Grenade',     GRENADE_DATA_URL,          2,  4,     50,     5],
    /* 2 */ ['Assault Rifle',    ASSAULT_RIFLE_DATA_URL,    2,  12,    20,     10],
    /* 3 */ ['Rocket Launcher',  ROCKET_LAUNCHER_DATA_URL,  4,  12,    75,     5],
    /* 4 */ ['Sniper Rifle',     SNIPER_RIFLE_DATA_URL,     4,  16,    75,     5]
    ];

/**
 * The starting configuration of units.
 * @const {!Array}
 */
var CHARACTERS = [
    //         Name       Start X      Start Y   Weapons
    /*  0 */ ['General',  2,           2,            []],
    /*  1 */ ['Stella',   3,           1,            [4, 0]],
    /*  2 */ ['Tex',      3,           2,            [3, 0]],
    /*  3 */ ['Spike',    1,           3,            [3, 1]],
    /*  4 */ ['Biff',     2,           3,            [2, 1]],
    /*  5 */ ['Mike',     3,           3,            [2, 0]],
    /*  6 */ ['General',  MAP_SIZE-3,  MAP_SIZE-3,   []],
    /*  7 */ ['Victoria', MAP_SIZE-4,  MAP_SIZE-2,   [4, 0]],
    /*  8 */ ['Snake',    MAP_SIZE-4,  MAP_SIZE-3,   [3, 0]],
    /*  9 */ ['Ice',      MAP_SIZE-2,  MAP_SIZE-4,   [3, 1]],
    /* 10 */ ['Wolf',     MAP_SIZE-3,  MAP_SIZE-4,   [2, 1]],
    /* 11 */ ['Mitch',    MAP_SIZE-4,  MAP_SIZE-4,   [2, 0]],
    ];

var d=document;
var t=$('#t');
var tt=$('#tt');
var cp=$('.cp');

var units = [];
var selectedUnit = null;
var map = [];
var aiActive = false;
var aiDelayCount = 0;
var gameOver = false;

/**
 * Initializes the map.
 *
 * The table element exists in the HTML file, but it does not include any tr or td elements.
 */
function initMap() {
    for (var y = 0; y < MAP_SIZE; y++) {
        var tr = c('tr');
        t.appendChild(tr);
        var row = [];
        for (var x = 0; x < MAP_SIZE; x++) {
            var td = c('td');
            td.onmouseover=onHover;
            td.onclick=onClick;
            td.x=x;
            td.y=y;
            td.fog=true;

            // Map Strategy #2
            // Scattered 2x2 blocks
            var blockX = Math.floor((x + 1) / 2);
            var blockY = Math.floor((y + 1) / 2);
            if ((x + y) > 8 &&
                    ((MAP_SIZE-1 - x) + (MAP_SIZE-1 - y)) > 8 &&
                    (blockX % 2 == 1 && blockY % 2 == 1)) {
                td.wall=true;
            }

            tr.appendChild(td);
            row.push(td);
        }
        map.push(row);
    }
}

function initUnits() {
    units = [];
    gameOver = false;

    for (var i = 0; i < 12; i++) {
        var u = {
                      id: i,
                    name: CHARACTERS[i][0],
                       x: CHARACTERS[i][1],
                       y: CHARACTERS[i][2],
                 weapons: [],
                    ammo: [],
                    team: i < 6,
                 general: i == 0 || i == 6,
                  health: 100,
            actionPoints: 4,
              currWeapon: 0,
                   kills: 0,
                  damage: 0,
            currWaypoint: 0,
        };

        for (var j = 0; j < CHARACTERS[i][3].length; j++) {
            var w = CHARACTERS[i][3][j];
            u.weapons.push(w);
            u.ammo.push(WEAPONS[w][5]);
        }

        units.push(u);
    }

    // Waypoints - hardcoded for this particular map

    // General hides in one of 4 hiding spots near starting corner
    var r = Math.random();
    if (r > 0.75) {
        units[6].waypoints = [ xy(23, 15) ];
    } else if (r > 0.5) {
        units[6].waypoints = [ xy(23, 11) ];
    } else if (r > 0.25) {
        units[6].waypoints = [ xy(15, 23) ];
    } else {
        units[6].waypoints = [ xy(11, 23) ];
    }

    // All other units makes big loop either clockwise or counterclockwise
    for (var i = 7; i <= 10; i++) {
        r = Math.random();
        if (r > 0.75) {
            units[i].waypoints = [ xy(4, 19), xy(4, 4), xy(19, 4), xy(19, 19) ];
        } else if (r > 0.5) {
            units[i].waypoints = [ xy(19, 4), xy(4, 4), xy(4, 19), xy(19, 19) ];
        } else if (r > 0.25) {
            units[i].waypoints = [ xy(8, 15), xy(8, 8), xy(15, 8), xy(15, 15) ];
        } else {
            units[i].waypoints = [ xy(15, 8), xy(8, 8), xy(8, 15), xy(15, 15) ];
        }
    }

    // Last unit always checks corners
    units[11].waypoints = [ xy(0, 4), xy(4, 0), xy(23, 19), xy(19, 23) ];
}

function xy(x, y) {
    return {'x': x, 'y': y};
}

/**
 * Searches for a DOM element by query selector.
 *
 * @param {!string} expr The query selector expression.
 * @return {?Element} The resulting DOM element.
 */
function $(expr) {
    return d.querySelector(expr)
}

/**
 * Creates a DOM element.
 *
 * @param {!string} name The element name.
 * @return {!Element} The new DOM element.
 */
function c(name) {
    return d.createElement(name)
}

/**
 * Returns the distance between two tiles.
 *
 * Everything in the game uses Manhattan distance.
 *
 * @param {!number} x1 First x-coord.
 * @param {!number} y1 First y-coord.
 * @param {!number} x2 Second x-coord.
 * @param {!number} y2 Second y-coord.
 * @return {!number} Distance in tiles.
 */
function dist(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}


/**
 * Redraws the map and the control panel.
 */
function redraw() {
    updateMapUnits();
    calcFog();
    updateMap();
    updateControlPanel();
}

function updateMapUnits() {
    for (var y = 0; y < MAP_SIZE; y++) {
        for (var x = 0; x < MAP_SIZE; x++) {
            map[y][x].unit = null;
        }
    }
    for (var i = 0; i < units.length; i++) {
        var u = units[i];
        u.td = null;
        if (u.health > 0) {
            var td = map[u.y][u.x];
            td.unit = u;
            u.td = td;
        }
    }
}

/**
 * Redraws the map.
 */
function updateMap() {
    var attackRange = getCurrentWeaponRange(selectedUnit);
    if (selectedUnit) {
        dijkstra(selectedUnit, undefined, selectedUnit.actionPoints);
    }

    for (var y = 0; y < MAP_SIZE; y++) {
        for (var x = 0; x < MAP_SIZE; x++) {
            var td = map[y][x];
            var classList = td.classList;
            td.innerHTML='';
            while (classList.length > 0) {
               classList.remove(classList.item(0));
            }

            if (td.wall) {
                td.innerHTML = '&#9639;'
                classList.add('wall');
            } else if (td.fog) {
                classList.add('fog');
            } else if (td.unit) {
                var u = td.unit;
                td.innerHTML = '&#' + (9818 + (u.id % 6)) + ';';
                td.classList.add(u.team?'blue':'red');
                if (u === selectedUnit) {
                    td.classList.add('sel');
                }
            }

            if (selectedUnit && selectedUnit.team) {
                if (td.dist <= selectedUnit.actionPoints && canMove(selectedUnit, x, y)) {
                    // Show move targets
                    td.classList.add('movetarget');
                    td.innerHTML = td.dist;
                } else if (canSee(selectedUnit, x, y)) {
                    if (dist(selectedUnit.x, selectedUnit.y, x, y) <= attackRange) {
                        td.classList.add('attack');
                    } else {
                        td.classList.add('visible');
                    }
                }
            }
        }
    }
}

function getCurrentWeaponRange(unit) {
    if (!unit) {
        return 0;
    }
    if (unit.weapons.length === 0) {
        return 0;
    }
    return WEAPONS[selectedUnit.weapons[selectedUnit.currWeapon]][3];
}

/**
 * Redraws the control panel.
 */
function updateControlPanel() {
    var html = '';
    for (var i = 0; i < 6; i++) {
        var u = units[i];
        html += '<div class="cp_container" data-id="' + i + '">' +
                '<div class="cp_avatar' + (u.health==0?' dead':'') + '">&#' + (9818 + i) + ';' +
                '<div class="cp_ap">' + (u.actionPoints>0?u.actionPoints:'') + '</div>' +
                '</div>' +
                '<div class="cp_name">' + u.name + '</div>' +
                '<div class="cp_health">' +
                '<div class="cp_health_bar" style="height:' + u.health + '%"></div>' +
                '<div class="cp_health_value">' + u.health + '</div>' +
                '</div>' +
                '<div class="cp_weapons">';

        for (var j = 0; j < u.weapons.length; j++) {
            html += buildWeaponHtml(u, j);
        }

        html += '</div></div>';
    }

    html += '<div class="cp_container">' +
            '<button onclick="endTurn()" title="End Turn">&#10004;</button>' +
            '<button onclick="fs()" title="Toggle Fullscreen">&#8690;</button>' +
            '<button onclick="toggleMusic()" title="Toggle Music">&#9835;</button>' +
            '</div>';

    cp.innerHTML = html;
}

/**
 * Builds the HTML snippet for a weapon control in the control panel.
 *
 * @param {!Object} unit The unit carrying the weapon.
 * @param {!number} index The index in player's list of weapons (either 0 or 1).
 * @return {!string} The weapon HTML.
 */
function buildWeaponHtml(unit, index) {
    var w = WEAPONS[unit.weapons[index]];
    var ammo = unit.ammo[index];
    var selected = unit.currWeapon == index;
    return '<div class="cp_weapon' + (selected?' sel':'') + '" data-w="' + index + '">' +
            '<img src="' + DATA_URL_PREFIX + w[1] + '"' +
            ' title="' + w[0] + ' (' + w[2] + ' AP, ' + w[3] + ' Range, ' + w[4] + ' Damage)">' +
            '<span class="cp_ammo">' + ammo + '</span>' +
            '</div>';
}

/**
 * Handles a click anywhere on the control panel.
 *
 * @param {!Event} e The click event.
 */
cp.onclick = function(e) {
    var el = e.target;
    var id = undefined;
    var weapon = undefined;
    while (el) {
        if (el.dataset) {
            if (el.dataset['id'] !== undefined) {
                id = parseInt(el.dataset['id'], 10);
            }
            if (el.dataset['w'] !== undefined) {
                weapon = parseInt(el.dataset['w'], 10);
            }
        }
        el = el.parentNode;
    }
    if (id !== undefined) {
        if (weapon !== undefined) {
            units[id].currWeapon = weapon;
            redraw();
        } else {
            selectUnit(units[id]);
        }
    }
};

function calcFog() {
    for (var y = 0; y < MAP_SIZE; y++) {
        for (var x = 0; x < MAP_SIZE; x++) {
            map[y][x].fog = !gameOver && !canPlayerSee(x, y);
        }
    }
}

/**
 * Calculates a line using Bresenham's algorithm.
 *
 * See: https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
 *
 * @param {!number} x0 The starting x-coord.
 * @param {!number} y0 The starting y-coord.
 * @param {!number} x1 The goal x-coord.
 * @param {!number} y1 The goal y-coord.
 * @param {!number=} opt_maxDist Optional maximum distance.
 * @param {!Function=} opt_callback Optional callback function at each step.
 * @return {!boolean} True on successfully reaching the goal position.
 */
function drawLine(x0, y0, x1, y1, opt_maxDist, opt_callback) {
    var x = x0;
    var y = y0;
    var dx = Math.abs(x1 - x0);
    var dy = Math.abs(y1 - y0);
    var sx = (x0 < x1) ? 1 : -1;
    var sy = (y0 < y1) ? 1 : -1;
    var err = dx - dy;

    while (true) {
        if (opt_maxDist !== undefined && dist(x0, y0, x, y) > opt_maxDist) {
            return false;
        }

        if (opt_callback) {
            opt_callback.call(null, x, y);
        }

        if (x == x1 && y == y1) {
            // Found destination
            return true;
        }

        if (map[y][x].wall) {
            // Ran into a wall
            return false;
        }

        // Unit AND (not start position) AND (not end position)
        if (map[y][x].unit && !(x === x0 && y === y0) && !(x === x1 && y === y1)) {
            // Ran into another unit
            return false;
        }

        var e2 = 2*err;
        if (e2 >-dy) {
            err -= dy;
            x  += sx;
        }
        if (e2 < dx) {
            err += dx;
            y  += sy;
        }
    }
}

function canSee(unit, x, y) {
    if (unit.health <= 0) {
        return false;
    }
    return drawLine(unit.x, unit.y, x, y, MAX_VISIBLE_DISTANCE) &&
            drawLine(x, y, unit.x, unit.y, MAX_VISIBLE_DISTANCE);
}

function canPlayerSee(x, y) {
    for (var i = 0; i < 6; i++) {
        if (canSee(units[i], x, y)) {
            return true;
        }
    }
    return false;
}

function onHover(e) {
    var unit = e.target.fog ? null : e.target.unit;
    redrawTooltip(unit);
}

function redrawTooltip(unit) {
    if (unit) {
        var html='<strong>' + unit.name + '</strong><br>' +
                'Health: ' + unit.health;

        if (unit.team) {
            // Blue team (friendly)
            html += '<br>Action points: ' + unit.actionPoints;

        } else if (selectedUnit && selectedUnit.team) {
            // Blue team selected hovering over red team
            html += '<br>Range: ' + dist(selectedUnit.x, selectedUnit.y, unit.x, unit.y);
            html += '<br>Visible: ' + canSee(selectedUnit, unit.x, unit.y);
        }

        tt.innerHTML=html;

        var rect = unit.td.getBoundingClientRect();
        if (unit.x < 16) {
            tt.style.left=(rect.right)+'px';
        } else {
            tt.style.left=(rect.left-320)+'px';
        }
        if (unit.y < 16) {
            tt.style.top=(rect.bottom)+'px';
        } else {
            tt.style.top=(rect.top-104)+'px';
        }
        tt.style.display='block';
    } else {
        tt.style.display='none';
    }
}

function onClick(e) {
    var ta=e.target;

    tt.style.display='none';

    if (ta.unit) {
        if (ta.unit.team) {
            // If the blue team, select the unit
            selectUnit(ta.unit);
        } else if (selectedUnit && selectedUnit.team) {
            // If the red team, attack the unit
            var attackMsg = canAttack(selectedUnit, ta.unit);
            if (attackMsg) {
                createFloatingText(attackMsg, e.clientX, e.clientY - 30, 'float_text');
            } else {
                attack(selectedUnit, ta.unit);
                redrawTooltip(ta.unit);
            }
        }
    } else if (selectedUnit && selectedUnit.team) {
        if (!move(selectedUnit, ta.x, ta.y)) {
            // Non movable, so de-select the unit
            selectUnit(null);
        }
    }
}

function selectUnit(unit) {
    if (unit && unit.health === 0) {
        selectedUnit = null;
        return;
    }
    selectedUnit = unit;
    redraw();
}

function createExplosion(x, y) {
    createFloatingText('&#x1F4A5;', x, y, 'explosion');
    playExplosionSound();
}

function createFloatingText(str, x, y, className) {
    var div = c('div');
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.classList.add(className);
    div.innerHTML = str;
    document.body.appendChild(div);
    window.setTimeout(function() { document.body.removeChild(div) }, 2000);
}

function canMove(unit, targetX, targetY) {
    if (targetX < 0 || targetX >= MAP_SIZE || targetY < 0 || targetY >= MAP_SIZE) {
        return false;
    }

    if (map[targetY][targetX].wall || map[targetY][targetX].unit) {
        return false;
    }

    if (dist(unit.x, unit.y, targetX, targetY) > unit.actionPoints) {
        return false;
    }

    if (!canSee(unit, targetX, targetY)) {
        return false;
    }

    return true;
}

function move(unit, targetX, targetY) {
    if (!canMove(unit, targetX, targetY)) {
        return false;
    }

    unit.actionPoints -= dist(unit.x, unit.y, targetX, targetY);
    unit.x = targetX;
    unit.y = targetY;
    if (unit === selectedUnit && unit.actionPoints === 0) {
        selectedUnit = null;
    }
    redraw();
    return true;
}

/**
 * Determines if the unit can attack the target unit.
 *
 * @param {!Object} unit The attacking unit.
 * @param {!Object} target The target unit.
 * @return {?string} Null if the unit can attack; error message if unit cannot attack.
 */
function canAttack(unit, target) {
    if (unit.team === target.team) {
        return 'Friendly fire';
    }

    if (unit.weapons.length === 0) {
        return 'No weapons';
    }

    var weapon = WEAPONS[unit.weapons[unit.currWeapon]];
    var ap = weapon[2];
    var range = weapon[3];

    if (unit.actionPoints < ap) {
        return 'Not enough AP';
    }

    if (unit.ammo[unit.currWeapon] === 0) {
        return 'Out of ammo';
    }

    if (target.health <= 0) {
        return 'Target is dead';
    }

    if (dist(unit.x, unit.y, target.x, target.y) > range) {
        return 'Out of range';
    }

    if (!canSee(unit, target.x, target.y)) {
        return 'No line of sight';
    }

    return null;
}

/**
 * Tries to perform an attack.
 *
 * @param {!Object} unit The attacking unit.
 * @param {!Object} target The target unit.
 * @return {!boolean} True on success; false on failure.
 */
function attack(unit, target) {
    var msg = canAttack(unit, target);
    if (msg) {
        return false;
    }

    var weapon = WEAPONS[unit.weapons[unit.currWeapon]];
    var ap = weapon[2];
    var damage = weapon[4];

    target.health = Math.max(0, target.health - damage);

    var rect = target.td.getBoundingClientRect();
    var x = (rect.left + rect.right) / 2;
    var y = (rect.top + rect.bottom) / 2;
    createFloatingText(damage + ' DMG', x, y - 30, 'float_text');
    createExplosion(x, y);

    unit.actionPoints -= ap;
    unit.ammo[unit.currWeapon]--;
    unit.damage += damage;

    if (target.health <= 0) {
        unit.kills++;
        if (target.general) {
            showGameOver(!target.team);
        }
    }

    redraw();
    return true;
}

/**
 * Calculates a "danger" score of a tile.
 *
 * Danger is calculated as follows:
 *   For each player unit
 *     If the player can see the tile
 *       Increment the score by max(1, 10-distance)
 *
 * This has the effect of "running away" to avoid tiles close to the player.
 *
 * @param {!number} x The candidate tile x-coord.
 * @param {!number} y The candidate tile y-coord.
 * @return {!number} The number of visible blue team units that can see the tile.
 */
function calcAiDanger(x, y) {
    var score = 0;

    // Ignore the General (unit 0) because he can't attack
    for (var i = 1; i < 6; i++) {
        var unit = units[i];
        if (unit.health > 0 && canSee(unit, x, y)) {
            var dist = Math.hypot(unit.x - x, unit.y - y);
            score += Math.max(1, 10 - dist);
        }
    }

    return score;
}

function endTurn() {
    // Clear out any remaining action points
    for (var i = 0; i < 6; i++) {
        units[i].actionPoints = 0;
    }
    doAi();
}

function endRound() {
    startRound();
}

function startRound() {
    for (var i = 0; i < units.length; i++) {
        units[i].actionPoints = 4;
    }
    selectUnit(null);
    tt.style.display='none';
}

var AI_DONE = 0;
var AI_VISIBLE_ACTION = 1;
var AI_HIDDEN_ACTION = 2;

function doAi() {
    $('#ai').style.display = 'block';
    aiActive = true;

    // If the blue general is visible, that becomes everyone's waypoint
    var canSeeGeneral = false;
    for (var i = 6; i < 12; i++) {
        if (canSee(units[i], units[0].x, units[0].y)) {
            canSeeGeneral = true;
            break;
        }
    }

    if (canSeeGeneral) {
        for (var i = 7; i < 12; i++) {
            units[i].currWaypoint = 0;
            units[i].waypoints = [xy(units[0].x, units[0].y)];
        }
    }

    for (var i = 6; i < 12; i++) {
        for (var j = 0; j < 4; j++) {
            var result = doAi2(units[i]);
            if (result === AI_VISIBLE_ACTION) {
                // Unit took an action
                // Delay for 0.5 seconds for animations
                aiDelayCount++;
                window.setTimeout(doAi, 400);
                return;
            }
        }
    }

    if (aiDelayCount === 0) {
        // Delay at least 1 time to show the overlay
        aiDelayCount++;
        window.setTimeout(doAi, 1000);
        return;
    }

    // No action, so AI is done
    $('#ai').style.display = 'none';
    aiActive = false;
    aiDelayCount = 0;
    endRound();
}

function doAi2(unit) {
    if (gameOver) {
        // Game is over
        return AI_DONE;
    }

    if (unit.health <= 0) {
        // Unit is dead
        return AI_DONE;
    }

    selectUnit(unit);

    if (unit.actionPoints > 1 && !unit.general) {
        // Spend the first 3 action points attack or moving to destination
        return doAi3(unit);
    } else {
        // Spend the last action point trying to hide
        return doAiHide(unit);
    }
}

function doAi3(unit) {
    // If the AI can see a player, attack the player
    for (var i = 0; i < 6; i++) {
        chooseWeapon(unit, units[i]);
        if (attack(unit, units[i])) {
            return AI_VISIBLE_ACTION;
        }
    }

    var waypoint = unit.waypoints[unit.currWaypoint];
    var dx = waypoint.x - unit.x;
    var dy = waypoint.y - unit.y;

    if (dx === 0 && dy === 0) {
        // At destination
        unit.currWaypoint = (unit.currWaypoint + 1) % unit.waypoints.length;
        return AI_DONE;
    }

    var path = dijkstra(unit, waypoint);
    if (!path || path.length < 2) {
        // No path (?)
        return AI_DONE;
    }

    var targetX = path[1].x;
    var targetY = path[1].y;
    if (move(unit, targetX, targetY)) {
        return canPlayerSee(targetX, targetY) ? AI_VISIBLE_ACTION : AI_HIDDEN_ACTION;
    }

    // Give up
    return AI_DONE;
}

function doAiHide(unit) {
    var xs = [0, 0, 1, 0, -1];
    var ys = [0, -1, 0, 1, 0];
    var minDanger = Infinity;
    var minDangerCell = null;
    var anyDanger = false;

    // Temporarily remove the unit from the board
    // Need to do this for accurate "can see" calculation
    unit.td.unit = null;

    dijkstra(unit, undefined, unit.actionPoints);

    for (var dist = 1; dist <= 4; dist++) {
        for (var dy = -dist; dy <= dist; dy++) {
            for (var dx = -dist; dx <= dist; dx++) {
                var x = unit.x + dx;
                var y = unit.y + dy;
                if (x >= 0 && x < MAP_SIZE && y >= 0 && y < MAP_SIZE && map[y][x].dist <= unit.actionPoints && ((dx === 0 && dy === 0) || canMove(unit, x, y))) {
                    var danger = calcAiDanger(x, y);
                    if (danger < minDanger) {
                        minDanger = danger;
                        minDangerCell = xy(x, y);
                    }
                    if (danger > 0) {
                        anyDanger = true;
                    }
                }
            }
        }
    }

    // Put the unit back on the board
    unit.td.unit = unit;

    if (anyDanger) {
        var targetX = unit.x;
        var targetY = unit.y;
        var path = dijkstra(unit, minDangerCell);
        if (path && path.length >= 2) {
            targetX = path[1].x;
            targetY = path[1].y;
        }
        var moveResult = move(unit, targetX, targetY);
        if (!moveResult) {
            return AI_DONE;
        } else {
            return canPlayerSee(targetX, targetY) ? AI_VISIBLE_ACTION: AI_HIDDEN_ACTION;
        }
    } else {
        // No danger, so just continue as normal
        return doAi3(unit);
    }
}

function chooseWeapon(unit, target) {
    var bestIndex = 0;
    var bestDamage = 0;

    for (var i = 0; i < unit.weapons.length; i++) {
        var weapon = WEAPONS[unit.weapons[i]];
        var ap = weapon[2];
        var damage = weapon[4];
        var range = weapon[3];

        if (unit.ammo[i] <= 0) {
            // Ignore out of ammo
            continue;
        }

        if (ap > unit.actionPoints) {
            // Ignore out of AP
            continue;
        }

        if (dist(unit.x, unit.y, target.x, target.y) > range) {
            // Ignore out of range
            continue;
        }

        if (damage > bestDamage) {
            bestIndex = i;
            bestDamage = damage;
        }
    }

    unit.currWeapon = bestIndex;
}


/**
 * Calculates Dijkstra's algorithm.
 *
 * @param {!Object} source Starting point, must have x and y properties.
 * @param {!Object=} opt_dest Optional destination point, must have x and y properties.
 * @param {!number=} opt_maxDist Optional maximum distance to examine.
 * @return {?Array} Array of steps if destination found; null otherwise.
 */
function dijkstra(source, opt_dest, opt_maxDist) {
    for (var y = 0; y < MAP_SIZE; y++) {
        for (var x = 0; x < MAP_SIZE; x++) {
            var cell = map[y][x];
            cell.dist = Infinity;
            cell.prev = null;
        }
    }

    source = map[source.y][source.x];
    source.dist = 0;

    var q = [source];

    while (q.length > 0) {
        var u = getMinCell(q);

        if (opt_dest && u.x === opt_dest.x && u.y === opt_dest.y) {
            return buildPath(u);
        }

        var dxs = [-1, 0, 0, 1];
        var dys = [0, -1, 1, 0];
        for (var i = 0; i < 4; i++) {
            var x = u.x + dxs[i];
            var y = u.y + dys[i];
            if (x >= 0 && x < MAP_SIZE && y >= 0 && y < MAP_SIZE) {
                var v = map[y][x];
                var alt = u.dist + 1;
                if (alt < v.dist && isEmpty(x, y) && (!opt_maxDist || alt <= opt_maxDist)) {
                    v.dist = alt;
                    v.prev = u;
                    q.push(v);
                }
            }
        }
    }
    return null;
}

function getMinCell(q) {
    var bestCell = null;
    var bestIndex = -1;
    var minDist = Infinity;

    for (var i = 0; i < q.length; i++) {
        var cell = q[i];
        if (cell.dist < minDist) {
            bestCell = cell;
            bestIndex = i;
            minDist = cell.dist;
        }
    }

    q.splice(bestIndex, 1);
    return bestCell;
}

function isEmpty(x, y) {
    var cell = map[y][x];
    return !cell.unit && !cell.wall;
}

function buildPath(cell) {
    var result = [];
    while (cell) {
        result.push(cell);
        cell = cell.prev;
    }
    result.reverse();
    return result;
}

function showGameOver(playerWins) {
    gameOver = true;
    selectUnit(null);
    redraw();

    var html = '<h1>';

    if (playerWins) {
        html += 'You win!';
    } else {
        html += 'You lose!';
    }

    html += '</h1><br><br><table><tr><th>Name</th><th>Health</th><th>Damage</th><th>Kills</th></tr>';

    for (var i = 0; i < 12; i++) {
        var unit = units[i];
        html += '<tr>' +
                '<td class="' + (unit.team?'blue':'red') + '">' + unit.name + '</td>' +
                '<td>' + unit.health + '</td>' +
                '<td>' + unit.damage + '</td>' +
                '<td>' + unit.kills + '</td>' +
                '</tr>';
    }

    html += '</table><br><br><a href="javascript:showTitle()">Main Menu</a>';

    var el = $('#go');
    el.innerHTML = html;
    el.style.display = 'block';
}

/**
 * Toggles fullscreen mode.
 */
function fs() {
    if (!document.fullscreenElement) {
        var el = document.documentElement;
        if (el['requestFullScreen']) {
            el['requestFullScreen']();
        } else if (el['mozRequestFullScreen']) {
            el['mozRequestFullScreen']();
        } else if (el['webkitRequestFullScreen']) {
            el['webkitRequestFullScreen']();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function showTitle() {
    $('#ti').style.display = 'block';
    $('#go').style.display = 'none';
}

function hideTitle() {
    $('#ti').style.display = 'none';
    initUnits();
    redraw();
    startRound();
}

initMap();

// Exports
window['endTurn'] = endTurn;
window['fs'] = fs;
window['showTitle'] = showTitle;
window['hideTitle'] = hideTitle;

