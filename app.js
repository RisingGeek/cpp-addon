try {
    const testAddon = require('./build/Release/testaddon.node');
    console.log(testAddon.key)
}
catch(err) {
    console.log("Module not found. Try the below mentioned steps:");
    console.log("1. Run 'npm run build' to compile the c++ addon");
    console.log("2. Run 'npm start'");
}