import styles from '../styles/Tabela.module.css'
export default function Tabela({ ...props }) {
    const { warna, ukuran } = props;
    const total =
      warna.length * ukuran.length <= 0
        ? warna.length <= 0
          ? ukuran.length
          : warna.length
        : warna.length * ukuran.length;
    return (
      <table id={props.id} className={styles.table}>
        <VarianHead varian1={warna} varian2={ukuran} />
        <tbody>
          {[...Array(total)].map((value, index) => {
            return (
              <tr key={index}>
                <VarianModel varian={warna} iterate={index} />
                <VarianModel varian={ukuran} iterate={index} />
                <td className={styles.td}>
                  <input type="text" />
                </td>
                <td className={styles.td}>Aksi</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  
  export function VarianModel({ ...props }) {
    const { varian, iterate } = props;
    if (varian && varian.length > 0) {
      return (
        <td className={styles.td}>{varian[iterate % varian.length]?.label}</td>
      );
    }
  
    return null;
  }
  
  export function VarianHead({ ...props }) {
    const { varian1, varian2 } = props;
    if (varian1.length > 0 && varian2.length < 1) {
      return (
        <thead>
          <tr>
            <th className={styles.th}>Warna</th>
          </tr>
        </thead>
      );
    } else if (varian2.length > 0 && varian1.length < 1) {
      return (
        <thead>
          <tr>
            <th className={styles.th}>Ukuran</th>
          </tr>
        </thead>
      );
    } else if (varian1.length > 0 && varian2.length > 0) {
      return (
        <thead>
          <tr>
            <th className={styles.th}>Warna</th>
            <th className={styles.th}>Ukuran</th>
          </tr>
        </thead>
      );
    }
  
    return null;
  }
  
 // https://codesandbox.io/s/nextjs-multi-select-2yy3x?file=/pages/index.js