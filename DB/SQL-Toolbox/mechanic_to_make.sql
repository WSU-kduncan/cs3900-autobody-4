SELECT 
    M.FirstName AS MechanicFirstName,
    M.LastName AS MechanicLastName,
    Ma.MakeName
FROM 
    MechanicToMake MM
JOIN 
    Mechanic M ON MM.MID = M.MID
JOIN 
    Make Ma ON MM.MakeID = Ma.MakeID
ORDER BY 
    M.LastName;
