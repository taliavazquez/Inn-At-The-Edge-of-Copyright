function runExamine({ location, command, toExamine, user, setChatHistory }) {

    function isInFightables(toExamine) {
        let foundItem = location.current.fightables.find(param => {
            return param.name.toLowerCase().includes(toExamine.trim())
        })

        if (foundItem) return true
        else return false
    }

    function getAndDisplayFightable(toExamine) {
        let foundItem = location.current.fightables.find(param => {
            return param.name.toLowerCase().includes(toExamine.trim())
        })
        if (foundItem) {
            setChatHistory(prevState => {
                return [...prevState, { type: 'displayed-stat', text: foundItem.description }]
            })
        }
    }

    function isInLocationInventory(toExamine) {
        let foundItem = location.current.inventory.find(param => {
            return param.item.itemName.toLowerCase().includes(toExamine.trim())
        })
        if (foundItem) return true
        else return false
        // return true;
    }

    function getAndDisplayLocationItem(toExamine) {
        let foundItem = location.current.inventory.find(param => {
            return param.item.itemName.toLowerCase().includes(toExamine.trim())
        })
        if (foundItem) {
            setChatHistory(prevState => {
                return [...prevState, { type: 'displayed-stat', text: `In the ${location.current.locationName} you see ${foundItem.item.description}` }]
            })
        }
    }

    function isInInventory(toExamine) {
        let foundItem = user.inventory.find(param => {
            return param.item.itemName.includes(toExamine.trim())
        })
        if (foundItem) {
            return true;
        } else {
            return false;
        }
    }

    function getAndDisplayInventoryItem(toExamine) {
        console.log('getAndDisplayInventoryItem')
        let foundItem = user.inventory.find(param => {
            return param.item.itemName.includes(toExamine.trim())
        })
        if (foundItem) {
            setChatHistory(prevState => {
                return [...prevState, { type: 'displayed-stat', text: `In your inventory you see ${foundItem.item.description}` }]
            })
        } else {
            setChatHistory(prevState => { return [...prevState, { type: "displayed-error", text: "There's nothing to discover by that name" }] })
        }
    }

    if (toExamine.trim() === '') {
        setChatHistory(prevState => { return [...prevState, { type: "displayed-error", text: `You didn't enter anything to ${command}! Try entering: ${command} <something>` }] })
    } else if (location.current.discoverables) {
        let discoverables = location.current.discoverables;
        let description;
        let exampleCommand;
        discoverables.forEach(discoverable => {
            discoverable.names.forEach(name => {
                if (name.startsWith(toExamine.toLowerCase()) && toExamine.trim() !== '') {
                    console.log("You found the", name);
                    description = discoverable.description;
                    exampleCommand = discoverable.exampleCommand;
                }
            })
        })
        if (description) {
            setChatHistory(prevState => {
                if (exampleCommand) {
                    return [...prevState,
                    { type: 'displayed-stat mt-3', text: `You see ${description}` },
                    { type: 'displayed-commands', text: `Try entering: ${exampleCommand}` }]
                } else {
                    return [...prevState, { type: 'displayed-stat', text: `You see ${description}` }]
                }
            })
        } else if (isInInventory(toExamine)) {
            getAndDisplayInventoryItem(toExamine)
        } else {
            setChatHistory(prevState => { return [...prevState, { type: "displayed-error", text: "There's nothing to discover by that name" }] })
        }
    }
    else if (isInInventory(toExamine)) {
        getAndDisplayInventoryItem(toExamine)
    }
    else if (isInLocationInventory(toExamine)) {
        console.log("found in location")
        getAndDisplayLocationItem(toExamine)
    }
    else if (isInFightables(toExamine)) {
        getAndDisplayFightable(toExamine)
    }
    else {
        setChatHistory(prevState => { return [...prevState, { type: "displayed-error", text: "There's nothing to discover by that name" }] })
    }
}

export default runExamine;
