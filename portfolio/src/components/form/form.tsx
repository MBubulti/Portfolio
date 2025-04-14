'use client';
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from '@/components/form/form.module.scss';
import Button from '../button/button';

export default function Form(){

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        message: ''
      })
    
      const [submitted, setSubmitted] = useState(false)
      const [loading, setLoading] = useState(false)
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
      }
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
    
        // remplace ces valeurs par les tiennes depuis EmailJS
        const serviceID = 'ton_service_id'
        const templateID = 'ton_template_id'
        const userID = 'ta_cle_public' // ex: 'qwe123Abc456'
    
        emailjs.send(serviceID, templateID, formData, userID)
          .then(() => {
            setSubmitted(true)
            setLoading(false)
          })
          .catch((err) => {
            console.error('Erreur lors de l’envoi :', err)
            setLoading(false)
          })
      }
    return(
        <div className={styles.contactForm}>
      <h2>Contactez-moi</h2>

      {submitted ? (
        <p className={styles.success}>Merci pour votre message ! ✨</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="company">Raison sociale</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Entreprise (facultatif)"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message ici..."
            />
          </div>
          <div className={styles.buttonBox}>
            <Button href="#" version="primary" size="medium">
            {loading ? 'Envoi en cours...' : 'Envoyer'}
            </Button>
          </div>
          
        </form>
      )}
    </div>
    )
}