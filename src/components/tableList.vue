<template>
        <table class="min-w-full divide-y divide-slate-200 rounded-2xl text-slate-200">
          <thead class="bg-slate-900">
            <tr>
              <th scope="col" class="px-6 py-3 text-xs font-bold text-left uppercase">ID</th>
              <th scope="col" class="px-6 py-3 text-xs font-bold text-left uppercase">Empresa</th>
              <th scope="col" class="px-6 py-3 text-xs font-bold text-left uppercase">Quantidade de ações</th>
              <th scope="col" class="px-6 py-3 text-xs font-bold text-left uppercase">Valor Unitario</th>
              <th scope="col" class="px-6 py-3 text-xs font-bold text-right uppercase">Delete</th>
            </tr>
          </thead>
          <tbody class="divide-y bg-slate-800 divide-slate-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">1</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">Jone Doe</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">jonne62@gmail.com</td>
              <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a class="text-green-500 hover:text-green-700" href="#"> Edit </a>
              </td>
              <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a class="text-red-500 hover:text-red-700" href="#"> Delete </a>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">2</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">Jone Doe</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">jonne62@gmail.com</td>
              <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a class="text-green-500 hover:text-green-700" href="#"> Edit </a>
              </td>
              <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a class="text-red-500 hover:text-red-700" href="#"> Delete </a>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">3</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">Jone Doe</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">jonne62@gmail.com</td>
              <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a class="text-green-500 hover:text-green-700" href="#"> Edit </a>
              </td>
              <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a class="text-red-500 hover:text-red-700" href="#"> Delete </a>
              </td>
            </tr>
          </tbody>
        </table>

</template>

<script>

export default {
  name: 'tableListComponent',
}
</script>