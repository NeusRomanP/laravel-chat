import { shallowMount } from "@vue/test-utils";
import ChatForm from "../../resources/js/components/ChatForm.vue";

describe('ChatForm.vue', () => {
  it('component is rendered', () =>{
    const wrapper = shallowMount(ChatForm);

    expect(wrapper.find('#btn-input').exists());
    expect(wrapper.find('#btn-chat').exists());
  })

  it('send message event is emited with correct message', async () => {
    const wrapper = shallowMount(ChatForm, {
      props: {
        user: 'TestUser',
      },
    });

    await wrapper.find('#btn-input').setValue('Hello');

    await wrapper.find('#btn-chat').trigger('click');

    expect(wrapper.emitted('messagesent')).toBeTruthy();

    expect(wrapper.emitted('messagesent')[0][0].message).toBe('Hello');
  })

  it('send message event is not emited when empty message', async () => {
    const wrapper = shallowMount(ChatForm, {
      props: {
        user: 'TestUser',
      },
    });

    await wrapper.find('#btn-input').setValue('');

    await wrapper.find('#btn-chat').trigger('click');

    expect(wrapper.emitted('messagesent')).toBeFalsy();
  })

  it('send message event is not emited when message is white space', async () => {
    const wrapper = shallowMount(ChatForm, {
      props: {
        user: 'TestUser',
      },
    });

    await wrapper.find('#btn-input').setValue(' ');

    await wrapper.find('#btn-chat').trigger('click');

    expect(wrapper.emitted('messagesent')).toBeFalsy();
  })
})