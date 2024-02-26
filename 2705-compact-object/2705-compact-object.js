function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj.map(compactObject).filter(value => value !== null);
    }

    if (typeof obj === 'object' && obj !== null) {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            const compactedValue = compactObject(value);
            if (compactedValue !== null) {
                acc[key] = compactedValue;
            }
            return acc;
        }, {});
    }

    return obj || null;
}
