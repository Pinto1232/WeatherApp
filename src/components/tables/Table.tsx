import React from 'react'
import UI from './../ui/UI'


type Props = {}

const Table = (props: Props) => {
  return (
      <UI className="basis-1/2">
          <table className="border-collapse  h-20 w-full bg-white basis-1/2">
                  <thead>
                  <tr>
                      <th className="border border-slate-300 ...">Icons</th>
                      <th className="border border-slate-300 ...">City</th>
                      <th className="border border-slate-300 ...">Temperature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 ...">Indiana</td>
                      <td className="border border-slate-300 ...">2c</td>
                      <td className="border border-slate-300 ...">2c</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 ...">Ohio</td>
                      <td className="border border-slate-300 ...">-23c</td>
                      <td className="border border-slate-300 ...">-23c</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 ...">Michigan</td>
                      <td className="border border-slate-300 ...">Detroit</td>
                      <td className="border border-slate-300 ...">Detroit</td>
                    </tr>
                      <tr>
                      <td className="border border-slate-300 ...">Michigan</td>
                      <td className="border border-slate-300 ...">Detroit</td>
                      <td className="border border-slate-300 ...">Detroit</td>
                    </tr>
                      <tr>
                      <td className="border border-slate-300 ...">Michigan</td>
                      <td className="border border-slate-300 ...">Detroit</td>
                      <td className="border border-slate-300 ...">Detroit</td>
                    </tr>
                  </tbody>
     </table>
     </UI>
  )
}

export default Table