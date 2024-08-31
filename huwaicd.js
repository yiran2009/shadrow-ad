let body = $response.body;

// 使用正则表达式替换 "amount" 和 "laterAmount" 的值
body = body.replace(/"amount"\s*:\s*\d+, '"amount": 6500');
body = body.replace(/"laterAmount"\s*:\s*\d+, '"laterAmount": 7000');

$done({ body });

