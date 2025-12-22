import React, { useEffect, useState } from "react";
import styles from "./CreateAnket.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, uploadPhoto } from "../../redux/actions/usersActions";
import { ImagePlus, Send, UserRoundPen } from "lucide-react";

const CreateAnket = () => {
  const dispatch = useDispatch();
  const user = useSelector(s => s.auth.user);

  const [form, setForm] = useState(user || {});
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  const save = () => {
    dispatch(updateProfile(form));
    if (photo) dispatch(uploadPhoto(photo));
  };

  const onFile = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => setPhoto(reader.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  if (!user) return null;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.cardInfo}>
          <h1>
            Your profile <UserRoundPen strokeWidth={2.5} />
          </h1>

          <div className={styles.grid}>
            <input placeholder="Name" value={form.name || ""} onChange={e => setForm({...form, name: e.target.value})}/>

            <select
              required
              value={form.institute || ""}
              onChange={e =>
                setForm({ ...form, institute: e.target.value })
              }
            >
              <option value="">Institute</option>
              <option value="ИХТИ">ИХТИ</option>
              <option value="ИННХ">ИННХ</option>
              <option value="ИП">ИП</option>
              <option value="ИННМ">ИННМ</option>
              <option value="ИТЛПМД">ИТЛПМД</option>
              <option value="ИУАИТ">ИУАИТ</option>
              <option value="ИУИ">ИУИ</option>
              <option value="ИПБ">ИПБ</option>
              <option value="ИДППО">ИДППО</option>
            </select>

            <input placeholder="Group" required/>
            <input type="number" placeholder="Age" required value={form.age || ""} onChange={e => setForm({...form, age: e.target.value})}/>
          </div>

          <textarea value={form.about || ""} onChange={e => setForm({...form, about: e.target.value})} required maxLength={100} placeholder="About you..." rows={5} />

          <span className={styles.tgWrapper}>
            <Send className={styles.tgItem}/>
            <input
              placeholder="Telegram"
              type="link"
              className={styles.tg}
              required
              value={form.telegram || ""} onChange={e => setForm({...form, telegram: e.target.value})}
            />
          </span>

          <button onClick={save}>Save</button>
        </div>

        <div className={styles.cardPhoto}>
          <label className={styles.photoUpload}>
            {user.photo ? <img className={styles.userPhoto} src={user.photo} alt="" /> : <ImagePlus size={32} />}
            <input type="file" onChange={onFile} hidden/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CreateAnket;
