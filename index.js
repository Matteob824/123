// quick sandbox script
const now = () => new Date().toISOString();

console.log(`started at ${now()}`);

process.on('SIGINT', () => {
  console.log('bye');
  process.exit(0);
});
