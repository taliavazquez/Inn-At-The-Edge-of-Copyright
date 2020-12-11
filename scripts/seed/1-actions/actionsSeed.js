module.exports = [
  {
    "actionName": "login",
    "commandBriefDescription": "log into the game",
    "commandLongDescription": "When you type a login command, you will open a log in pop up, which will allow you to enter your email and password, or use social login.",
    "waysToCall": "login, log in",
    "exampleCall": "log in",
    "exampleResult": "Welcome, [characterName]! You have logged in!"
  },
  {
    "actionName": "logout",
    "commandBriefDescription": "log out of the game",
    "commandLongDescription": "When you type a log out command, you will be logged out of your current session.",
    "waysToCall": "logout, log out",
    "exampleCall": "logout",
    "exampleResult": "You have logged out."
  },
  {
    "actionName": "get",
    "commandBriefDescription": "Pick up an item",
    "commandLongDescription": "When you type a get command word followed by an item in your location that is free to pick up, you will add it to your inventory. If the item isn't free to pick up, you will get a result of 'You can't pick that up!'",
    "waysToCall": "get, /g, pick up, grab",
    "exampleCall": "get the branch",
    "exampleResult": "You pick up a branch"
  },
  {
    "actionName": "look",
    "commandBriefDescription": "You look around you.",
    "commandLongDescription": "When you type a look command word with nothing after it, you will look around your location, seeing the description, possible exits, and items nearby.",
    "waysToCall": "look, /l, look around",
    "exampleCall": "look",
    "exampleResult": "You look around. --DESCRIPTION OF LOCATION, EXITS, ITEMS, IF ANY--"
  },
  {
    "actionName": "drop",
    "commandBriefDescription": "You drop an item",
    "commandLongDescription": "When you type a drop command word followed by an item in your inventory, you will drop it into your location.",
    "waysToCall": "drop, /d, discard",
    "exampleCall": "drop branch",
    "exampleResult": "You drop a branch"
  },
  {
    "actionName": "inventory",
    "commandBriefDescription": "You check your inventory",
    "commandLongDescription": "When you type an inventory command, you will recieve a list of all items in your inventory",
    "waysToCall": "inventory, /i, check inventory",
    "exampleCall": "inventory",
    "exampleResult": "You have 3 mushrooms, 1 branch, and a frog."
  },
  {
    "actionName": "move",
    "commandBriefDescription": "You move through an exit",
    "commandLongDescription": "When you type a move command word followed by an available exit from your location, you will move in that direction.",
    "waysToCall": "move, /m, go, walk",
    "exampleCall": "move north",
    "exampleResult": "You exit."
  },
  {
    "actionName": "speak",
    "commandBriefDescription": "You speak.",
    "commandLongDescription": "When you type a speak command word followed by other text, your other text will be spoken aloud to your location. For yelling, see yell.",
    "waysToCall": "speak, say, /s",
    "exampleCall": "say Hello!",
    "exampleResult": "character: Hello!"
  },
  {
    "actionName": "wear",
    "commandBriefDescription": "You put on a wearable item.",
    "commandLongDescription": "When you type a wear command followed by a valid item in your inventory, you will put it on if you're not already wearing something there.",
    "waysToCall": "wear, put on, don",
    "exampleCall": "wear green socks",
    "exampleResult": "You put on green socks."
  },
  {
    "actionName": "remove",
    "commandBriefDescription": "You take off an item you are wearing.",
    "commandLongDescription": "When you type a remove command followed by an item you are wearing, you will take it off and add it to your inventory.",
    "waysToCall": "take off, remove, /r, doff",
    "exampleCall": "remove green socks",
    "exampleResult": "You take off green socks."
  },
  {
    "actionName": "stats",
    "commandBriefDescription": "You call up your character stats.",
    "commandLongDescription": "When you type stats, you will see a list of your stats and their values.",
    "waysToCall": "stats",
    "exampleCall": "stats",
    "exampleResult": "--LIST OF YOUR CHARACTER'S CURRENT STATS--"
  },
  {
    "actionName": "juggle",
    "commandBriefDescription": "You juggle something.",
    "commandLongDescription": "When you type juggle, followed by a number, followed by an appropriate item, you will attempt to juggle that number of those items if you have them.",
    "waysToCall": "juggle",
    "exampleCall": "juggle 3 balls",
    "exampleResult": "You begin to juggle."
  },
  {
    "actionName": "emote",
    "commandBriefDescription": "you describe an action",
    "commandLongDescription": "When you type an emote command word followed by text, the result will be displayed to the room as an action of your character.",
    "waysToCall": "/e, /me, emote",
    "exampleCall": "/me leans against a tree",
    "exampleResult": "You lean against a tree"
  },
  {
    "actionName": "sleep",
    "commandBriefDescription": "You go to sleep",
    "commandLongDescription": "When you type a sleep command while lying down, you will go to sleep and recover HP, but you will not be able to see or hear around you. If you are attacked, you will automatically wake up.",
    "waysToCall": "go to sleep, sleep",
    "exampleCall": "sleep, fall asleep",
    "exampleResult": "You fall into a deep slumber."
  },
  {
    "actionName": "wake",
    "commandBriefDescription": "You wake up",
    "commandLongDescription": "When you type a wake command while sleeping, you will wake up.",
    "waysToCall": "wake up, wake, awake, awaken",
    "exampleCall": "wake, wake up, awaken",
    "exampleResult": "You wake up."
  },
  {
    "actionName": "position",
    "commandBriefDescription": "You change position.",
    "commandLongDescription": "When you type a position command, you will move from your current position into the new one.",
    "waysToCall": "stand up, stand, sit down, sit, lay down, lay, lie down, lie",
    "exampleCall": "stand up",
    "exampleResult": "You stand up."
  },
  {
    "actionName": "help",
    "commandBriefDescription": "check command usage",
    "commandLongDescription": "When you type help, you will get a list of all game commands. When you type help followed by a game command, you will get that command's details.",
    "waysToCall": "/h, help, help [command]",
    "exampleCall": "help",
    "exampleResult": "--LIST OF GAME COMMANDS--"
  },
  {
    "actionName": "examine",
    "commandBriefDescription": "Look closely at an item",
    "commandLongDescription": "When you type an examine command word followed by an appropriate item, you will get a detailed description.",
    "waysToCall": "examine, inspect, study",
    "exampleCall": "examine stick",
    "exampleResult": "You look closely at a stick. You see a dry, brown branch."
  },
  {
    "actionName": "give",
    "commandBriefDescription": "give an item to someone",
    "commandLongDescription": "When you type give followed by an item in your inventory, and someone else in your location, you will give the item to them.",
    "waysToCall": "give",
    "exampleCall": "give a mushroom to Grizabella",
    "exampleResult": "You give a mushroom to Grizabella"
  },
  {
    "actionName" : "whisper",
    "commandBriefDescription" : "whisper privately to another character, or an NPC",
    "commandLongDescription" : "When you type a whisper command, you will speak to another character privately. If you whisper to an NPC, it will initiate a converstation with them.",
    "waysToCall" : "whisper, /w, whisper to, speak to, say to, tell, talk to",
    "exampleCall" : "tell Chordori hello!",
    "exampleResult" : "Whisper to Chordori: hello!"
}
]