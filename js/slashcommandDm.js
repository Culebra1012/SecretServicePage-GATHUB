


module.exports = {
    description: 'Mandar Mds con el bot',
    options: [{
        name: 'user',
        description: 'Usuario que va el mensaje',
        type: 'USER',
        required: true,
    },
    {
        name: 'message',
        description: 'Mensaje del Md',
        type: 'STRING',
        required: true
    }],

    run: async(client, interaction, guild, args) => {
        const user = guild.members.cache.get(args.get('user')?.value ?? interaction.user.id);
        const dm = interaction.options.getString('message')

        try {
            await user.send(dm)
        } catch (error) {
            return interaction.reply({content:'El usuario no se encontro o tiene los mensajes privados desactivados', ephemeral: true})
        } 
        interaction.reply({content: `Mensaje enviado con exito`, ephemeral: true})
    }
}