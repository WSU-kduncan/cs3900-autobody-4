SELECT 
    COUNT(*) AS OilChangeCount
FROM 
    ServiceOrder SO
JOIN 
    Service S ON SO.ServiceID = S.ServiceID
WHERE 
    S.ServiceName = 'Oil Change';

