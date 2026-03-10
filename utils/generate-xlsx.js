const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const data = [
  { id: 1, username: 'standard_user', password: 'secret_sauce', expectedResult: 'success', expectedMessage: '', description: 'Valid standard user' },
  { id: 2, username: 'performance_glitch_user', password: 'secret_sauce', expectedResult: 'success', expectedMessage: '', description: 'Performance glitch user (valid)' },
  { id: 3, username: 'locked_out_user', password: 'secret_sauce', expectedResult: 'error', expectedMessage: 'Epic sadface: Sorry, this user has been locked out.', description: 'Locked out user' },
  { id: 4, username: 'problem_user', password: 'secret_sauce', expectedResult: 'success', expectedMessage: '', description: 'Problem user (logs in but UI issues)' },
  { id: 5, username: 'invalid_user', password: 'wrong_password', expectedResult: 'error', expectedMessage: 'Epic sadface: Username and password do not match any user in this service', description: 'Invalid credentials' },
  { id: 6, username: '', password: 'secret_sauce', expectedResult: 'error', expectedMessage: 'Epic sadface: Username is required', description: 'Blank username' },
  { id: 7, username: 'standard_user', password: '', expectedResult: 'error', expectedMessage: 'Epic sadface: Password is required', description: 'Blank password' },
  { id: 8, username: 'standard_user', password: 'wrong_password', expectedResult: 'error', expectedMessage: 'Epic sadface: Username and password do not match any user in this service', description: 'Wrong password for valid user' },
  { id: 9, username: 'user!@#', password: 'pass!@#', expectedResult: 'error', expectedMessage: 'Epic sadface: Username and password do not match any user in this service', description: 'Special characters in credentials' },
  { id: 10, username: 'STANDARD_USER', password: 'SECRET_SAUCE', expectedResult: 'error', expectedMessage: 'Epic sadface: Username and password do not match any user in this service', description: 'Case sensitivity check' }
];

const ws = XLSX.utils.json_to_sheet(data);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'LoginData');

const outPath = path.join(dataDir, 'login-data.xlsx');
XLSX.writeFile(wb, outPath);

const jsonPath = path.join(dataDir, 'login-data.json');
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log('Wrote:', outPath, jsonPath);
