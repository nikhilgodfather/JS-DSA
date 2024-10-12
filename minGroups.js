var minGroups = function(intervals) {
    // Store all start and end events
    let events = [];
    
    // Add start and end points for each interval
    for (const [start, end] of intervals) {
        events.push([start, 1]);  // +1 for start
        events.push([end + 1, -1]);  // -1 for end (+1 to exclude the end itself)
    }
    
    // Sort events: first by time, then by type (-1 for end comes before +1 for start)
    events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    let maxGroups = 0;
    let currentGroups = 0;
    
    // Traverse through the events
    for (const [time, event] of events) {
        currentGroups += event;  // Adjust the number of current active groups
        maxGroups = Math.max(maxGroups, currentGroups);  // Track maximum groups needed
    }
    
    return maxGroups;
};

console.log(minGroups([[229966,812955],[308778,948377],[893612,952735],[395781,574123],[478514,875165],[766513,953839],[460683,491583],[133951,212694],[376149,838265],[541380,686845],[461394,568742],[804546,904032],[422466,467909],[557048,758709],[680460,899053],[110928,267321],[470258,650065],[534607,921875],[292993,994721],[645020,692560],[898840,947977],[33584,330630],[903142,970252],[17375,626775],[804313,972796],[582079,757160],[785002,987823],[599263,997719],[486500,527956],[566481,813653],[211239,863969],[808577,883125],[21880,516436],[264747,412144],[327175,772333],[984807,988224],[758172,916673],[23583,406006],[954674,956043],[379202,544291],[688869,785368],[841735,983869],[99836,916620],[332504,740696],[740840,793924],[896607,920924],[868540,922727],[125849,550941],[433284,685766]]))