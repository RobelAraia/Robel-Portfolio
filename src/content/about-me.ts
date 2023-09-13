type Statement = {
  input: string;
  return: string;
};

export default [
  {
    input: "Robel.currentLocation",
    return: '"London, UK"',
  },
  {
    input: "Robel.contactInfo",
    return:
      '["<a href="mailto:RobelAraia@hotmail.com">RobelAraia@hotmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/robel-araia-416b7a165/" target="_blank">LinkedIn</a>", "<a rel="noopener" href="https://github.com/RobelAraia" target="_blank">github</a>"]',
  },
  {
    input: "Robel.cv",
    return:
      '"<a rel="noopener" href="https://jays-code-collection.github.io/portfolio/jaysharma.pdf" target="_blank">jaysharma.pdf</a>"',
  },
  {
    input: "Robel.education",
    return:
      '"Bachelors degree in Psychology 2:2 - Coventry University"',
  },
  {
    input: "Robel.skills",
    return:
      '["Python", "Microsoft Azure", "Azure Functions", "Data Analytics", "Powershell", "Bash", "git"]',
  },
  {
    input: "Robel.interests",
    return: '["Programming", "Football", "Basketball", "Muay Thai", "Gaming"]',
  },
] as Statement[];
