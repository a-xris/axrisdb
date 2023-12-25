
require('dotenv').config();

//importing modules 
const { REST,Client,IntentsBitField,EmbedBuilder,MessageActionRow,MessageButton }= require('discord.js')
const { Routes } = require('discord-api-types/v9')

//defining variables
const clientId= process.env.CLIENT_ID
const token= process.env.TOKEN 

//Arrays

//truth array 
const truthsArray = ['What is your biggest fear?', 'Have you ever cheated on a test?', "What's the most embarrassing thing you've done in public?", 'Have you ever lied to get out of trouble?', 'What is your guilty pleasure?', 'If you could switch lives with someone for a day, who would it be?', "What's the weirdest dream you've ever had?", 'Have you ever stolen something?', "What's your most awkward moment on a date?", "Have you ever eavesdropped on someone else's conversation?", "What's the most childish thing you still do?", 'Have you ever had a crush on a teacher?', "What's the most outrageous thing you've done to impress someone?", "What's the craziest thing you've done on a dare?", 'Have you ever sent a text to the wrong person?', "What's your most embarrassing nickname?", 'Have you ever been caught picking your nose?', "What's the strangest talent you have?", 'Have you ever peed in a pool?', "What's the most annoying habit you have?", 'If you had to eat one food for the rest of your life, what would it be?', "What's the weirdest place you've fallen asleep?", 'Have you ever walked into a glass door?', "What's your most irrational fear?", 'Have you ever pretended to know a song to fit in?', "What's the most unusual pet you've ever had?", 'Have you ever cried during a movie? If so, which one?', "What's the most embarrassing thing your parents have caught you doing?", 'Have you ever faked being sick to get out of something?', "What's the most bizarre food you've ever tried?", 'Have you ever regretted a text you sent?', "What's the most ridiculous reason you've gotten in trouble?", 'Have you ever broken something and blamed someone else?', "What's the strangest dream you've ever had?", 'Have you ever lied about your age?', "What's the grossest thing you've ever eaten?", 'Have you ever laughed so hard you peed your pants?', "What's the most embarrassing thing that's happened to you in school?", 'Have you ever cheated in a game?', "What's the weirdest compliment you've ever received?", 'Have you ever snuck into a movie without paying?', "What's the most embarrassing thing you've worn in public?", 'Have you ever blamed someone else for something you did?', "What's the most cringe-worthy thing you've posted on social media?", 'Have you ever googled yourself?', "What's the most embarrassing thing you've done on a video call?", "Have you ever gotten someone's name wrong on purpose?", "What's the most embarrassing song on your playlist?", 'Have you ever pretended to like a gift you hated?', "What's the most awkward encounter you've had with a crush?", "Have you ever pretended to know a language you don't?", "What's the most embarrassing thing you've done at a party?", "Have you ever laughed at a joke you didn't understand?", "What's the weirdest conversation you've overheard?", "Have you ever pretended to know a celebrity you've never met?", "What's the most embarrassing thing you've done at a friend's house?", 'Have you ever laughed during a serious moment?', "What's the most awkward thing you've said to a teacher?", "Have you ever had food stuck in your teeth and didn't know it?", "What's the most embarrassing thing you've done at school?", 'Have you ever pretended to be someone else online?', "What's the most embarrassing thing you've done in front of your crush?", 'Have you ever accidentally sent a text to the wrong person?', "What's the most embarrassing autograph you've asked for?", 'Have you ever walked into a room and forgot why you went in there?', "What's the most embarrassing thing you've done at a family gathering?", 'Have you ever pretended to like a movie you hated?', "What's the most embarrassing thing you've done on a date?", 'Have you ever accidentally insulted someone without realizing it?', "What's the most awkward situation you've been in?", 'Have you ever farted in a quiet room and blamed someone else?', "What's the most embarrassing thing you've done at a wedding?", "Have you ever pretended to know a book you've never read?", "What's the most embarrassing thing you've done at a job interview?", 'Have you ever laughed at someone when they were upset?', "What's the most embarrassing thing you've done at a concert?", 'Have you ever pretended to know a song and sang the wrong lyrics?', "What's the most embarrassing thing you've said in front of your crush?", 'Have you ever tripped over nothing and fell?', "What's the most embarrassing thing you've worn to bed?", 'Have you ever pretended to be busy to avoid someone?', "What's the most awkward encounter you've had with a stranger?", "Have you ever farted in an elevator and pretended it wasn't you?", "What's the most embarrassing thing you've done in front of a celebrity?", 'Have you ever pretended to like a hobby to impress someone?', "What's the most embarrassing thing you've done at a sleepover?", 'Have you ever laughed at a joke that offended someone else?', "What's the most embarrassing thing you've done while home alone?", "Have you ever accidentally insulted someone's cooking?", "What's the most embarrassing thing you've done at the gym?", 'Have you ever pretended to know a historical event you were clueless about?', "What's the most embarrassing thing you've done in the workplace?", 'Have you ever laughed during a serious conversation?', "What's the most embarrassing thing you've done in a public restroom?", 'Have you ever pretended to know a famous quote and got it wrong?', "What's the most embarrassing thing you've done at a sports event?", "Have you ever pretended to know a popular TV show you've never watched?", "What's the most embarrassing thing you've done in a class presentation?", 'Have you ever laughed at a joke that no one else found funny?', "What's the most embarrassing thing you've done at the beach?", 'Have you ever pretended to know a subject during a group discussion?', "What's the most embarrassing thing you've done during a job meeting?", "Have you ever laughed at someone's misfortune?", "What's the most embarrassing thing you've done at a theme park?", 'Have you ever pretended to know a word and used it incorrectly?', "What's the most embarrassing thing you've done on a road trip?", 'Have you ever laughed at a serious news story?', "What's the most embarrassing thing you've done during a workout?", "Have you ever pretended to know a popular trend you didn't understand?", "What's the most embarrassing thing you've done at a family reunion?", 'Have you ever laughed at a funeral?', "What's the most embarrassing thing you've done during a conference call?", 'Have you ever pretended to know a technology term you were clueless about?', "What's the most embarrassing thing you've done at a museum?", 'Have you ever laughed at a joke that offended someone else?', "What's the most embarrassing thing you've done at a birthday party?", "Have you ever pretended to know a famous person you've never met?", "What's the most embarrassing thing you've done at a concert?", "Have you ever laughed at a situation when you shouldn't have?", "What's the most embarrassing thing you've done during a date?", 'Have you ever pretended to know a movie and made up a plot?', "What's the most embarrassing thing you've done at a friend's house?", 'Have you ever laughed at a serious movie scene?', "What's the most embarrassing thing you've done during a group project?", 'Have you ever pretended to know a language and failed miserably?', "What's the most embarrassing thing you've done during a school play?", "Have you ever laughed at someone's misfortune?", "What's the most embarrassing thing you've done at a job interview?", 'Have you ever pretended to know a book and made up the story?', "What's the most embarrassing thing you've done during a class presentation?", 'Have you ever laughed at a joke that no one else found funny?', "What's the most embarrassing thing you've done at a sports event?", "Have you ever pretended to know a popular TV show you've never watched?", "What's the most embarrassing thing you've done during a job meeting?", "Have you ever laughed at someone's misfortune?", "What's the most embarrassing thing you've done at a theme park?", 'Have you ever pretended to know a word and used it incorrectly?', "What's the most embarrassing thing you've done on a road trip?", 'Have you ever laughed at a serious news story?', "What's the most embarrassing thing you've done during a workout?", "Have you ever pretended to know a popular trend you didn't understand?", "What's the most embarrassing thing you've done at a family reunion?", 'Have you ever laughed at a funeral?', "What's the most embarrassing thing you've done during a conference call?", 'Have you ever pretended to know a technology term you were clueless about?', "What's the most embarrassing thing you've done at a museum?", 'Have you ever laughed at a joke that offended someone else?', "What's the most embarrassing thing you've done at a birthday party?", "Have you ever pretended to know a famous person you've never met?", "What's the most embarrassing thing you've done at a concert?", "Have you ever laughed at a situation when you shouldn't have?", "What's the most embarrassing thing you've done during a date?", 'Have you ever pretended to know a movie and made up a plot?', "What's the most embarrassing thing you've done at a friend's house?", 'Have you ever laughed at a serious movie scene?', "What's the most embarrassing thing you've done during a group project?", 'Have you ever pretended to know a language and failed miserably?', "What's the most embarrassing thing you've done during a school play?", "Have you ever laughed at someone's misfortune?", "What's the most embarrassing thing you've done at a job interview?", 'Have you ever pretended to know a book and made up the story?', "What's the most embarrassing thing you've done during a class presentation?", 'Have you ever laughed at a joke that no one else found funny?', "What's the most embarrassing thing you've done at a sports event?", "Have you ever pretended to know a popular TV show you've never watched?", "What's the most embarrassing thing you've done during a job meeting?", "Have you ever laughed at someone's misfortune?", "What's the most embarrassing thing you've done at a theme park?", 'Have you ever pretende']

//dare array
const daresArray = ['Do your best impression of a famous celebrity.', 'Take a silly selfie and set it as your profile picture for the next hour.', 'Speak in an accent for the next three rounds.', 'Do 10 jumping jacks.', "Send a message to your crush (or a friend) confessing your love (as a dare, make it clear that it's a joke afterward).", 'Wear socks on your hands for the next 10 minutes.', 'Make up a short rap about the person to your left.', 'Post a random, silly status on your social media.', 'Act out a scene from your favorite movie.', 'Do your best impression of a cartoon character.', "Dance to a song of the group's choosing.", 'Wear a funny hat for the next 15 minutes.', 'Do your best karaoke performance.', "Send a message to your ex (or someone you haven't talked to in a while) saying you miss them (clarify later that it's a dare).", 'Speak in rhymes for the next three rounds.', 'Do a handstand against the wall.', 'Create a short, funny poem about the host of the game.', 'Post a "bad hair day" picture on social media.', 'Sing "Happy Birthday" to yourself as if it were your birthday.', 'Wear a mustache made of drawn-on eyeliner for the next 20 minutes.', 'Do your best impression of a robot.', 'Speak in an accent for the next three rounds.', 'Act like a news anchor reporting on a funny, made-up event.', 'Let someone else give you a makeover using makeup or face paint.', 'Balance a spoon on your nose for the next 2 minutes.', 'Do the chicken dance for the next 5 minutes.', 'Draw a funny face on your stomach with a marker.', 'Speak in an opera voice for the next three rounds.', "Pretend you're a runway model and do a quick fashion show.", 'Perform a short magic trick.', 'Mimic the person to your right for the next 5 minutes.', 'Wear socks on your hands for the next 10 minutes.', 'Do your best impression of a famous politician.', 'Post a silly, exaggerated selfie on social media.', 'Speak in a British accent for the next three rounds.', 'Do the Macarena dance.', 'Write and perform a short, funny commercial for a random object in the room.', 'Act like a mime for the next 3 minutes.', 'Wear a funny hat for the next 15 minutes.', 'Make up a short rap about the person to your left.', 'Speak in an accent for the next three rounds.', "Send a message to your crush (or a friend) confessing your love (as a dare, make it clear that it's a joke afterward).", 'Act out a scene from your favorite movie.', 'Do 10 jumping jacks.', 'Wear a mustache made of drawn-on eyeliner for the next 20 minutes.', 'Do your best karaoke performance.', 'Make up a short rap about the person to your right.', 'Draw a funny face on your stomach with a marker.', 'Wear socks on your hands for the next 10 minutes.', 'Speak in rhymes for the next three rounds.', "Send a message to your ex (or someone you haven't talked to in a while) saying you miss them (clarify later that it's a dare).", 'Speak in an opera voice for the next three rounds.', 'Do the chicken dance for the next 5 minutes.', 'Act like a news anchor reporting on a funny, made-up event.', 'Wear a funny hat for the next 15 minutes.', 'Do a handstand against the wall.', 'Speak in an accent for the next three rounds.', "Dance to a song of the group's choosing.", 'Write and perform a short, funny commercial for a random object in the room.', 'Let someone else give you a makeover using makeup or face paint.', 'Act out a scene from your favorite movie.', 'Wear socks on your hands for the next 10 minutes.', 'Draw a funny face on your stomach with a marker.', 'Post a "bad hair day" picture on social media.', 'Speak in rhymes for the next three rounds.', 'Sing "Happy Birthday" to yourself as if it were your birthday.', 'Do your best karaoke performance.', 'Act like a mime for the next 3 minutes.', "Send a message to your ex (or someone you haven't talked to in a while) saying you miss them (clarify later that it's a dare).", 'Speak in an accent for the next three rounds.', 'Perform a short magic trick.', 'Do the Macarena dance.', 'Write and perform a short, funny commercial for a random object in the room.', 'Speak in an opera voice for the next three rounds.', 'Make up a short rap about the person to your left.', 'Wear a mustache made of drawn-on eyeliner for the next 20 minutes.', 'Do the chicken dance for the next 5 minutes.', 'Speak in a British accent for the next three rounds.', 'Wear a funny hat for the next 15 minutes.', 'Balance a spoon on your nose for the next 2 minutes.', 'Speak in rhymes for the next three rounds.', 'Act like a news anchor reporting on a funny, made-up event.', 'Draw a funny face on your stomach with a marker.', 'Speak in an accent for the next three rounds.', "Send a message to your crush (or a friend) confessing your love (as a dare, make it clear that it's a joke afterward).", 'Do 10 jumping jacks.', 'Make up a short rap about the person to your right.', 'Post a silly, exaggerated selfie on social media.', 'Act like a mime for the next 3 minutes.', 'Do your best impression of a famous celebrity.', 'Speak in an opera voice for the next three rounds.', 'Speak in rhymes for the next three rounds.', "Dance to a song of the group's choosing.", 'Wear socks on your hands for the next 10 minutes.', 'Do the Macarena dance.', 'Write and perform a short, funny commercial for a random object in the room.', 'Wear a mustache made of drawn-on eyeliner for the next 20 minutes.', 'Act out a scene from your favorite movie.', "Send a message to your ex (or someone you haven't talked to in a while) saying you miss them (clarify later that it's a dare).", 'Speak in a British accent for the next three rounds.', 'Make up a short rap about the person to your left.', 'Do your best karaoke performance.', 'Perform a short magic trick.', 'Act like a news anchor reporting on a funny, made-up event.', 'Wear a funny hat for the next 15 minutes.', 'Draw a funny face on your stomach with a marker.', 'Speak in an accent for the next three rounds.', 'Wear socks on your hands for the next 10 minutes.', 'Balance a spoon on your nose for the next 2 minutes.', 'Speak in rhymes for the next three rounds.', 'Speak in an opera voice for the next three rounds.', 'Write and perform a short, funny commercial for a random object in the room.', 'Do the chicken dance for the next 5 minutes.', 'Act like a mime for the next 3 minutes.', 'Post a "bad hair day" picture on social media.', 'Make up a short rap about the person to your right.', 'Wear a mustache made of drawn-on eyeliner for the next 20 minutes.', 'Do the Macarena dance.', 'Speak in a British accent for the next three rounds.', 'Draw a funny face on your stomach with a marker.', 'Speak in an accent for the next three rounds.', "Send a message to your crush (or a friend) confessing your love (as a dare, make it clear that it's a joke afterward).", 'Speak in rhymes for the next three rounds.', 'Do 10 jumping jacks.', 'Act like a news anchor reporting on a funny, made-up event.', "Dance to a song of the group's choosing.", 'Act out a scene from your favorite movie.', 'Let someone else give you a makeover using makeup or face paint.', 'Wear a funny hat for the next 15 minutes.', 'Speak in an opera voice for the next three rounds.', 'Wear socks on your hands for the next 10 minutes.', 'Write and perform a short, funny commercial for a random object in the room.', 'Do your best impression of a famous celebrity.', 'Do the chicken dance for the next 5 minutes.', "Send a message to your ex (or someone you haven't talked to in a while) saying you miss them (clarify later that it's a dare).", 'Speak in a British accent for the next three rounds.', 'Speak in rhymes for the next three rounds.', 'Act like a mime for the next 3 minutes.', 'Make up a short rap about the person to your left.', 'Draw a funny face on your stomach with a marker.', 'Speak in an accent for the next three rounds.', 'Post a silly, exaggerated selfie on social media.', 'Wear a mustache made of drawn-on eyeliner for the next 20 minutes.', 'Balance a spoon on your nose for the next 2 minutes.', 'Act out a scene from your favorite movie.', 'Do your best karaoke performance.', 'Speak in rhymes for the next three rounds.', 'Wear socks on your hands for the next 10 minutes.', 'Write and perform a short, funny commercial for a random object in the room.', 'Speak in an opera voice for the next three rounds.', 'Do the Macarena dance.', "Dance to a song of the group's choosing.", 'Speak in an accent for the next three rounds.', 'Draw a funny face on your stomach with a marker.', 'Act like a news anchor reporting on a funny, made-up event.', 'Wear a funny hat for the next 15 minutes.', 'Make up a short rap about the person to your right.', 'Speak in rhymes for the next three rounds.', 'Let someone else give you a makeover using makeup or face paint.', 'Do your best impression of a famous politician.', 'Wear a mustache made of drawn-on eyeliner for the next 20 minutes.', 'Speak in a British accent for the next three rounds.', "Send a message to your crush (or a friend) confessing your love (as a dare, make it clear that it's a joke afterward).", 'Speak in an opera voice for the next three rounds.', 'Do the chicken dance for the next 5 minutes.', 'Write and perform a short, funny commercial for a random object in the room.', 'Speak in an accent for the next three rounds.', 'Speak in rhymes for the next three rounds.', 'Balance a spoon on your nose for the next 2 minutes.', 'Draw a funny face on your stomach with a marker.', 'Wear socks on your hands for the next 10 minutes.', 'Act like a mime for the next 3 minutes.', 'Do your best karaoke performance.', 'Wear a funny hat for the next 15 minutes.', 'Post a "bad hair day" picture on social media.', 'Act out a scene from your favorite movie.', 'Speak in a British accent for the next three rounds.', 'Make up a short rap about the person to your left.', 'Do the Macarena dance.', 'Speak in an opera voice for the next three rounds.', "Send a message to your ex (or someone you haven't talked to in a while) saying you miss them (clarify later that it's a dare).", "Dance to a song of the group's choosing.", 'Speak in rhymes for the next three rounds.', 'Speak in an accent for the next three rounds.', 'Write and perform a short, funny commercial for a random object in the room.', 'Draw a funny face on your stomach with a marker.', 'Wear a mustache made of drawn-on eyeliner for the next 20 minutes.', 'Speak in a British accent for the next three rounds.', 'Wear socks on your hands for the next 10 minutes.', 'Speak in rhymes for the next three rounds.', 'Act like a news anchor reporting on a funny, made-up event.', 'Speak in an opera voice for the next three rounds.', 'Do the chicken dance for the next 5 minutes.', 'Make up a short rap about the person to your right.', 'Speak in an accent for the next three rounds.', 'Do your best impression of a famous celebrity.', 'Post a silly, exaggerated selfie on social media.', 'Act out a scene from your favorite movie.', 'Wear a funny hat for the next 15 minutes.', "Send a message to your crush (or a friend) confessing your love (as a dare, make it clear that it's a joke afterward).", 'Draw a funny face on your stomach with a marker.', 'Speak in rhymes for the next three rounds.', 'Wear socks on your hands for the next 10 minutes.', 'Do the Macarena dance.', 'Balance a spoon on your nose for the next 2 minutes.', 'Speak in a British accent for the next three rounds.', 'Let someone else give you a makeover using makeup or face paint.', 'Write and perform a short, funny commercial for a random object in the room.', 'Act like a mime for the next 3 minutes.', 'Speak in an opera voice for the next three rounds.', 'Wear a mustache made of drawn-on eyeliner for the next 20 minutes.', 'Do your best karaoke performance.', 'Speak in an accent for the next three rounds.', 'Speak in rhymes for the next three rounds.', 'Act like a news anchor reporting on a funny.']




//creating functions

async function registerSlash(clientId ,token,guildId)
{
    const commands = [
        {
          name: 'ping',
          description: 'Replies with Pong!',
        },
        {
          name: 'help',
          description: 'Shows commands',
        },
        {
          name: 'meme',
          description: 'Gives out a random meme',
        },
        {
          name: 'truth',
          description: 'Asks a random TRUTH question',
        },
        {
          name: 'dare',
          description: 'Gives a random DARE',
        },
        {
          name: 'ai',
          description: 'responds with an AI answer',
          options: [
            {
              name: 'text',
              type: 3,
              description: 'get ai response',
              required: true,
            },
          ]
        },
        {
          name: 'ban',
          description: 'Ban user guild',
          options: [
            {
              name: 'usermention',
              type: 6,
              description: 'User to be banned',
              required: true,
            },
            {
              name: 'reason',
              type: 3,
              description: 'Reason for the ban',
              required: false,
            },
          ],
        },
        {
          name: 'kick',
          description: 'Kick user guild',
          options: [
            {
              name: 'usermention',
              type: 6,
              description: 'User to be kicked',
              required: true,
            },
            {
              name: 'reason',
              type: 3,
              description: 'Reason for the kick',
              required: false,
            },
          ],
        },
        {
          name: 'play',
          description: 'Play a song',
          options: [
            {
              name: 'songname',
              type: 3, // STRING type
              description: 'Name of the song to play',
              required: true,
            },
          ],
        },
        {
          name: 'leave',
          description: 'Leave the voice channel',
        },
];

const rest = new REST ({version:'10'}).setToken(token);

(async ()=>{
    try{
        console.log('Registring Slash commands');
        console.log(guildId)
         await rest.put(
          Routes.applicationGuildCommands(
            clientId,guildId
            ),
          {body: commands}
         );
         console.log('Slash cmds registered successfully');
          }catch(error){
          console.log(`There was an error: ${error}`);
        }
    })()};


  
  
//client defining
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.GuildPresences
  ]
});

//on bot run 

client.on('ready',()=>{
    console.log(`${client.user.tag} is ready`)
    client.guilds.cache.forEach(guild => {
        // Register the slash command in each guild
        const guildId= guild.id
        registerSlash(process.env.CLIENT_ID,process.env.TOKEN,guildId);
})
});



//interaction maker
client.on('interactionCreate', async interaction=>{
    if(!interaction.isChatInputCommand()) return;


    //ping cmd
    if (interaction.commandName==='ping'){
        await interaction.reply('pong');

    //ban cmd
    }else if (interaction.commandName==='ban'){
        const user = interaction.options.get('usermention').user;
        const reason = interaction.options.get('reason')?.value || 'No reason provided';

        if (interaction.member.permissions.has('BAN_MEMBER')){
            try {
              await interaction.guild.members.ban(user, { reason });
              const largerFontTruth = '**' + `Successfully banned ${user.tag} by ${interaction.member.displayName}` + '**';
              const userAvatarURL = interaction.member.user.displayAvatarURL({ dynamic: true, size: 256 });
              const embed = new EmbedBuilder()
               .setColor('#ff0000')
               .setTitle('**BAN**')
               .setDescription(largerFontTruth)
	           .setTimestamp()
	           .setFooter({ text: `banned by ${interaction.member.displayName}`,iconURL: userAvatarURL});
               await interaction.reply({ embeds: [embed]});
            }  catch (error) {
              console.error(error);
              await interaction.reply('Error banning the user.');
            }
        }else{
            const ember = new EmbedBuilder()
              .setColor('#ff0000')
              .setTitle('**BAN**')
              .setDescription(`${interaction.member.displayName} dont have ban user permission`)
              await interaction.reply('You dont have persmission to ban ')
        } 

    //kick cmd
    }else if (interaction.commandName==='kick'){
        const user = interaction.options.get('usermention').user;
        const reason = interaction.options.get('reason')?.value || 'No reason provided';

        if (interaction.member.permissions.has('KICK_MEMBER')){
            try {
              await interaction.guild.members.kick(user, { reason });
              const largerFontTruth = '**' + `Successfully kicked ${user.tag} by ${interaction.member.displayName}` + '**';
              const userAvatarURL = interaction.member.user.displayAvatarURL({ dynamic: true, size: 256 });
              const embed = new EmbedBuilder()
               .setColor('#ff0000')
               .setTitle('**KICK**')
               .setDescription(largerFontTruth)
	           .setTimestamp()
	           .setFooter({ text: `kicked by ${interaction.member.displayName}`,iconURL: userAvatarURL});
               await interaction.reply({ embeds: [embed]});
            }  catch (error) {
              console.error(error);
              await interaction.reply('Error kicking the user.');
            }
        }else{
            const ember = new EmbedBuilder()
              .setColor('#ff0000')
              .setTitle('**KICK**')
              .setDescription(`${interaction.member.displayName} dont have kick user permission`)
              await interaction.reply('You dont have persmission to kick ')
        } 
    
    //truth cmd
    }else if (interaction.commandName=== 'truth') {
  
        const randomTruth = truthsArray[Math.floor(Math.random() * truthsArray.length)];
    
        const largerFontTruth = '**' + randomTruth + '**';
        const userAvatarURL = interaction.member.user.displayAvatarURL({ dynamic: true, size: 256 });
        const embed = new EmbedBuilder()
          .setColor('#49ff05')
          .setTitle('**TRUTH**')
          .setDescription(largerFontTruth)
          .setTimestamp()
          .setFooter({ text: `requested by ${interaction.member.displayName}`,iconURL: userAvatarURL});
           await interaction.reply({ embeds: [embed]});
    
    //dare cmd
    }else if (interaction.commandName=== 'dare'){
        const randomDare = daresArray[Math.floor(Math.random() * daresArray.length)];
     
        const largerFontTruth = '**' + randomDare + '**';
        const userAvatarURL = interaction.member.user.displayAvatarURL({ dynamic: true, size: 256 });
        const embed = new EmbedBuilder()
          .setColor('#49ff05')
          .setTitle('**DARE**')
          .setDescription(largerFontTruth)
          .setTimestamp()
          .setFooter({ text: `requested by ${interaction.member.displayName}`,iconURL: userAvatarURL});
           await interaction.reply({ embeds: [embed]});
    
    //
    }
});

client.login(token);
