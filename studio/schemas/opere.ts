import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'opere',
  title: 'Opere',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'anno',
      title: 'Anno',
      type: 'string',
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    }),
    {
      name: 'tecniche',
      title: 'Tecniche',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tecniche'}],
        },
      ],
    },
    {
      name: 'collocazione',
      title: 'Collocazione',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'collocazioni'}],
        },
      ],
    },
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
