const getObjectFieldValuebyPath = (path, object) => {
    const pathSclpit = path.split('.');

    const fieldValue = pathSclpit.reduce((acc, item) => {
        if (acc && acc.hasOwnProperty(item)) {
            return acc[item];
        } else {
            return undefined;
        }
    }, object);

    return fieldValue;
};

export { getObjectFieldValuebyPath };
