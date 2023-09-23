import React from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

const CoinDetails = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <Box sx={{ my: 15 }}>

    <div>CoinDetails {id} Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus aut, laborum, iste aliquam quod pariatur officia exercitationem quaerat alias ducimus! Eveniet esse omnis odio nihil, fugit tempore eos reprehenderit.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quasi explicabo amet nemo pariatur. Quibusdam in quod architecto at molestiae, vitae similique dolores atque, quis necessitatibus aliquid. Voluptatum, ratione rem!
    Repellat ex sequi voluptas, unde officia ut. Tempore nulla, libero vel ipsa a iure reiciendis nihil explicabo debitis accusantium itaque? Quod animi blanditiis distinctio quas beatae minima veritatis facere consectetur?
    Repudiandae, corrupti ipsa consectetur impedit error aliquam nam tempora necessitatibus, ad saepe ab quisquam dignissimos harum pariatur. Cupiditate dignissimos rerum illum officiis corporis architecto facere sint est. Amet, saepe praesentium.
    Corporis est molestiae incidunt quasi ab inventore rem cupiditate laborum, quam in rerum excepturi quaerat dolore enim natus facilis harum perferendis laudantium ipsum dolores maxime. Voluptate corrupti enim incidunt? Blanditiis!
    Animi, perferendis nemo repellendus molestias enim eligendi temporibus quasi nostrum explicabo vitae, non totam, repellat quis laudantium amet qui aperiam accusamus. Expedita quia quas dignissimos est illum? Doloribus, consequatur ducimus!
    Expedita consectetur laudantium culpa sed reiciendis accusamus ullam! Cum, ratione eveniet nobis minus enim debitis beatae nisi hic itaque ex soluta consectetur eligendi esse, excepturi optio sapiente incidunt delectus sunt!
    Voluptatem, suscipit reiciendis. Velit saepe perferendis totam quidem similique blanditiis ducimus eius molestiae ea et quo distinctio accusantium neque impedit itaque, dolorem doloribus quod. Cum ab odio dolore iure nobis.
    Laborum alias, ex ratione omnis voluptates laboriosam veritatis magnam quia eaque, id modi temporibus eum nesciunt nobis, est autem corporis nisi! Obcaecati non eveniet nihil nobis dolorem doloribus porro ipsum.
    Praesentium aliquam at repudiandae, aspernatur ducimus eveniet harum dolorem nisi nulla quae veniam deserunt incidunt vitae. Sapiente fuga modi mollitia inventore, laborum voluptas alias quam error commodi nemo, corrupti expedita?
    Praesentium provident eligendi, dolorum amet odit sapiente consequatur! At assumenda rerum perferendis sapiente, ratione voluptates. Veniam sed quaerat blanditiis ratione molestias possimus, voluptates pariatur, eveniet asperiores deleniti, neque doloremque cum.</div>
    </Box>
  )
}

export default CoinDetails